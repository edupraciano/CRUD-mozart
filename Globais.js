const BD_ID = "1V7R7JZCCn0GkXAxYBb9gq0ht_hb_6kkgq-T55SwQz5Q";
const SS = SpreadsheetApp.openById(BD_ID);
const aba_usuarios = SS.getSheetByName("Usuários");
const lastRow = aba_usuarios.getLastRow();
