function solveProblem() {
    const problemElement = document.querySelector('.problem');
    if (problemElement && problemElement.textContent.trim().length > 0 && problemElement.offsetParent !== null) {
        const problem = problemElement.textContent.trim();
        console.log('Problem:', problem);

        try {
            let answer = evaluateExpression(problem);
            console.log('Calculated Answer:', answer);

            if (isFinite(answer)) {
                const answerInput = document.querySelector('.answer');
                console.log('Answer Input Field:', answerInput);

                if (answerInput && !answerInput.disabled) {
                    answerInput.value = answer;
                    answerInput.dispatchEvent(new Event('input', { bubbles: true }));
                    pressEnter(answerInput);
                }
            }
        } catch (e) {
            console.error('Error evaluating expression:', e);
        }
    }
}

function evaluateExpression(expression) {
    const tokens = expression.match(/(\d+\.?\d*|[\+\–\×\÷])/g);
    console.log('Tokens:', tokens);
    switch (tokens[1]) {
        case '+': return parseFloat(tokens[0]) + parseFloat(tokens[2]);
        case '–': return parseFloat(tokens[0]) - parseFloat(tokens[2]);
        case '×': return parseFloat(tokens[0]) * parseFloat(tokens[2]);
        case '÷': return parseFloat(tokens[0]) / parseFloat(tokens[2]);
    }
}

function pressEnter(inputElement) {
    const enterKeyEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
    });
    inputElement.dispatchEvent(enterKeyEvent);
}

setInterval(solveProblem, 1000);
