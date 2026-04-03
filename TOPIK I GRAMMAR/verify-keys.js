const fs = require('fs');

// Read grammar-data
const grammarDataContent = fs.readFileSync('d:\\GM\\topik-i-grammar\\grammar-data.js', 'utf8');
const dataCode = grammarDataContent.replace('const GRAMMAR_DATA =', 'module.exports =');
fs.writeFileSync('d:\\GM\\topik-i-grammar\\temp-data.js', dataCode);
const grammarData = require('d:\\GM\\topik-i-grammar\\temp-data.js');

// Read quiz-bank
const quizBankContent = fs.readFileSync('d:\\GM\\topik-i-grammar\\quiz-bank.js', 'utf8');
const quizCode = quizBankContent.replace('const QUIZ_BANK =', 'module.exports =');
fs.writeFileSync('d:\\GM\\topik-i-grammar\\temp-quiz.js', quizCode);
const quizBank = require('d:\\GM\\topik-i-grammar\\temp-quiz.js');

let missingKeys = [];
let totalItems = 0;

grammarData.forEach(category => {
    category.items.forEach(item => {
        totalItems++;
        if (!quizBank[item.name]) {
            missingKeys.push(item.name);
        }
    });
});

console.log('Total grammar items defined in grammar-data.js:', totalItems);
console.log('Total keys in quiz-bank.js:', Object.keys(quizBank).length);

if (missingKeys.length > 0) {
    console.log('❌ MISMATCH FOUND! The following keys are missing in quiz-bank.js :');
    console.log(missingKeys);
} else {
    console.log('✅ ALL CLEAR! 100% of grammar items are perfectly mapped to the quiz bank.');
}

// Clean up
try {
    fs.unlinkSync('d:\\GM\\topik-i-grammar\\temp-data.js');
    fs.unlinkSync('d:\\GM\\topik-i-grammar\\temp-quiz.js');
} catch (e) { }
