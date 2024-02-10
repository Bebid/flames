import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import ToggleButton from "./components/toggleButton";

function App() {
    const [person1, setPerson1] = useState("");
    const [person2, setPerson2] = useState("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [identicalCount, setIdenticalCount] = useState<number>(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const [identicalChars, setIdenticalChars] = useState([] as string[]);

    const aPerson1Letters: string[] = person1.toLowerCase().split("");
    const aPerson2Letters: string[] = person2.toLowerCase().split("");

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
        const aIdenticalLetters: string[] = [];

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

        setFormSubmitted(true);
        setIdenticalChars(aIdenticalLetters);
        setIdenticalCount(iResultCount);
    }

    function resetForm(status: boolean) {
        setFormSubmitted(status);
    }

    function setDarkTheme(state: boolean) {
        setIsDarkTheme(state);
    }

    return (
        <div data-theme={isDarkTheme ? "dark" : "light"}>
            <ToggleButton action={setDarkTheme}></ToggleButton>
            {formSubmitted ? (
                <Result
                    identicalChars={identicalChars}
                    identicalCount={identicalCount}
                    person1={aPerson1Letters}
                    person2={aPerson2Letters}
                    resetForm={resetForm}
                />
            ) : (
                <section id="form">
                    <div className="container">
                        <div className="headline">
                            <h1>F . L . A . M . E . S</h1>
                            <p>
                                Friends, Love, Affection, Marriage, Enemy,
                                Siblings
                                <br />
                                What’s it going to be?
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <div>
                                <label>
                                    <input
                                        id="person1"
                                        name="person1"
                                        onChange={changePerson1}
                                        placeholder="Your name"
                                        value={person1}
                                    ></input>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        id="person2"
                                        name="person2"
                                        onChange={changePerson2}
                                        placeholder="Your crush name"
                                        value={person2}
                                    ></input>
                                </label>
                            </div>
                            <button className="btn-primary" onClick={testMatch}>
                                Find Out
                            </button>
                        </form>
                    </div>
                </section>
            )}
        </div>
    );
}

export default App;
