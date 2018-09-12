function isEmail(str) {
    regexp = /^[A-Za-z0-9][A-Za-z0-9]*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (regexp.test(str)) {
        return true
    }else return false;
}

let emails = [
    'a@b.c',
    'a@babc.c',
    'a@babc.abc',
]

let notEmails = [
    '.aabad@babc.abc',
    '@gmail.com',
    'ab@gmail.',
    '@#abc@gmail.com'
]

for (email of emails) {
    document.write(email + ": " + isEmail(email) + "<br>");
}
for (notemail of notEmails) {
    document.write(notemail + ": " + isEmail(notemail) + "<br>")
};