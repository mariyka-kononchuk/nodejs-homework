const { v4 } = require('uuid');
const listContacts = require('./listContacts')

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {name, email, phone, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
}

module.exports = addContact;