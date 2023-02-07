let test = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"`;


function getFirst(word) {
    for (let letter of word)
    {
        if (word.indexOf(letter) === word.lastIndexOf(letter))
        {
            return letter
        }
    }
       
    return null
}

function solver(test) {
    let array_of_words = test.split(' ')
    for (let i = 0; i < array_of_words.length; i++) {
        array_of_words[i] = array_of_words[i].replace(/(\r\n|\r|--)/gm, "");
    }

    array_of_words = array_of_words.filter(item => item !== '')

    let here = []

    for (let i = 0; i < array_of_words.length; i++) {
        here.push(getFirst(array_of_words[i]))
    }

    console.log(getFirst(here))
}


solver(test)