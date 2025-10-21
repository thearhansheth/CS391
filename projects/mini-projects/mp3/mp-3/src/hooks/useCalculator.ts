import { useState } from 'react';

const useCalculator = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<number>(0);

    const calculate = (operation: string) => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        let res = 0;

        switch (operation) {
            case 'add':
                res = n1 + n2;
                break;
            case 'subtract':
                res = n1 - n2;
                break;
            case 'multiply':
                res = n1 * n2;
                break;
            case 'divide':
                res = n1 / n2;
                break;
            case 'power':
                res = 1;
                for (let i = 0; i < n2; i++) {
                    res *= n1;
                }
                break;
        }

        setResult(res);
    };

    const clear = () => {
        setNum1('');
        setNum2('');
        setResult(0);
    };

    return {
        num1,
        num2,
        result,
        setNum1,
        setNum2,
        calculate,
        clear,
    };
};

export default useCalculator;
