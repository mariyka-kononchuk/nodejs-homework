const listContacts = require('./listContacts')

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts.splice(index, 1);
  return contacts;
}

module.exports = removeContact;