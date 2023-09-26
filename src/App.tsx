import { ChangeEvent, FormEvent, useState } from "react";

function App() {
    const [person1, setPerson1] = useState("");
    const [person2, setPerson2] = useState("");
    const [result, setResult] = useState("");

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function changePerson1(e: ChangeEvent<HTMLInputElement>) {
        setPerson1(e.target.value);
    }

    function changePerson2(e: ChangeEvent<HTMLInputElement>) {
        setPerson2(e.target.value);
    }

    function testMatch() {
        const aPerson1Letters: string[] = person1.split("");
        const aPerson2Letters: string[] = person2.split("");

        const aIdenticalLetters: string[] = [];
        const aResultText: string[] = [
            "Friends",
            "Lovers",
            "Angry",
            "Married",
            "Engage",
            "Sorry",
        ];
        let iResultCount: number = 0;

        aPerson1Letters.forEach((value) => {
            if (aPerson2Letters.includes(value) && value !== " ") {
                if (!aIdenticalLetters.includes(value)) {
                    aIdenticalLetters.push(value);

                    let person1MatchedCount = aPerson1Letters.filter(
                        (item) => item === value
                    );
                    let person2MatchedCount = aPerson2Letters.filter(
                        (item) => item === value
                    );
                    iResultCount +=
                        person1MatchedCount.length + person2MatchedCount.length;
                }
            }
        });

        if (iResultCount % 6 === 0) {
            setResult(aResultText[5]);
        } else {
            setResult(aResultText[(iResultCount % 6) - 1]);
        }
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="person1">Person 1</label>
                    <input
                        id="person1"
                        name="person1"
                        onChange={changePerson1}
                    ></input>
                </div>
                <div>
                    <label htmlFor="person2">Person 2</label>
                    <input
                        id="person2"
                        name="person2"
                        onChange={changePerson2}
                    ></input>
                </div>
                <button onClick={testMatch}>Test Match</button>
                <h4>{result}</h4>
            </form>
        </>
    );
}

export default App;
