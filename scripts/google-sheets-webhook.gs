/**
 * Google Apps Script для приёма ответов RSVP в таблицу.
 *
 * 1. Создайте Google Таблицу
 * 2. Расширения → Apps Script, вставьте этот код
 * 3. Задайте WEBHOOK_SECRET (любая строка) — ту же укажите в .env как GOOGLE_SHEETS_WEBHOOK_SECRET
 * 4. Развернуть → Новое развёртывание → Веб-приложение
 *    - Выполнять от имени: я
 *    - Доступ: все (не «только пользователи Google»)
 * 5. Скопируйте URL из «Управление развёртываниями» (должен заканчиваться на /exec)
 *    После каждого изменения кода — новое развёртывание или «Изменить» → новая версия
 */

const WEBHOOK_SECRET = "replace-with-your-secret";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const secret = String(data.secret || "").trim();
    const expected = String(WEBHOOK_SECRET || "").trim();
    if (expected && secret !== expected) {
      return jsonResponse({ error: "unauthorized" });
    }

    if (!data.name || !data.attendance) {
      return jsonResponse({ error: "missing fields" }, 400);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Name", "Attendance", "Submitted At"]);
    }

    const submittedAt = data.submittedAt
      ? Utilities.formatDate(
          new Date(data.submittedAt),
          "Asia/Almaty",
          "dd.MM.yyyy HH:mm",
        )
      : Utilities.formatDate(new Date(), "Asia/Almaty", "dd.MM.yyyy HH:mm");

    sheet.appendRow([String(data.name), String(data.attendance), submittedAt]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ error: String(err) }, 500);
  }
}

function jsonResponse(body, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
  // Apps Script не поддерживает HTTP-коды напрямую; клиент проверяет поле error
  return output;
}
