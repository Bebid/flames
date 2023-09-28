import { ChangeEvent, FormEvent, useState } from "react";
import NameResult from "./components/NameResult";
import Hero from "./components/Hero";
import "./App.css";

function App() {
    const [person1, setPerson1] = useState("");
    const [person2, setPerson2] = useState("");
    const [result, setResult]: React.ReactElement<HTMLHeadingElement> =
        useState();

    const [identicalChars, setIdenticalChars] = useState([] as string[]);

    const aPerson1Letters: string[] = person1.split("");
    const aPerson2Letters: string[] = person2.split("");

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
        const aResultText: React.ReactElement<HTMLHeadingElement>[] = [
            <h2>
                You and your crush will end up being <strong>Friends</strong>
            </h2>,
            <h2>
                Congrats! Your crush <strong>loves</strong> you back.
            </h2>,
            <h2>
                You and your crush have <strong>Affections</strong> for each
                other
            </h2>,
            <h2>
                Both of you will end up getting <strong>Married</strong>!
            </h2>,
            <h2>
                Sad to say, you both treat each other as an{" "}
                <strong>Enemy</strong>
            </h2>,
            <h2>
                Ahh, you have a crush on your <strong>Sibling</strong>
            </h2>,
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

        setIdenticalChars(aIdenticalLetters);

        if (iResultCount % 6 === 0) {
            setResult(aResultText[5]);
        } else {
            setResult(aResultText[(iResultCount % 6) - 1]);
        }
    }

    return (
        <>
            <Hero />
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="person1">Your name</label>
                    <input
                        id="person1"
                        name="person1"
                        onChange={changePerson1}
                    ></input>
                </div>
                <div>
                    <label htmlFor="person2">Your crush name</label>
                    <input
                        id="person2"
                        name="person2"
                        onChange={changePerson2}
                    ></input>
                </div>
                <button onClick={testMatch}>Test Match</button>
            </form>

            {result && person1 && person2 && (
                <div>
                    {result}
                    <NameResult
                        chars={aPerson1Letters}
                        identicalChars={identicalChars}
                    ></NameResult>
                    <NameResult
                        chars={aPerson2Letters}
                        identicalChars={identicalChars}
                    ></NameResult>
                </div>
            )}
        </>
    );
}

export default App;
