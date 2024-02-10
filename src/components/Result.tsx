import NameResult from "./NameResult";
type ResultProps = {
    person1: string[];
    person2: string[];
    identicalChars: string[];
    identicalCount: number;
    resetForm: (status: boolean) => void;
};
function Result({
    identicalChars,
    identicalCount,
    person1,
    person2,
    resetForm,
}: ResultProps) {
    const aResultText: React.ReactElement<HTMLHeadingElement>[] = [
        <h2>
            You and your crush will end up being <strong>Friends</strong>
        </h2>,
        <h2>
            Congrats! Your crush <strong>loves</strong> you back.
        </h2>,
        <h2>
            You and your crush have <strong>Affections</strong> for each other
        </h2>,
        <h2>
            Both of you will end up getting <strong>Married</strong>!
        </h2>,
        <h2>
            Sad to say, you both treat each other as an <strong>Enemy</strong>
        </h2>,
        <h2>
            Ahh, you have a crush on your <strong>Sibling</strong>
        </h2>,
    ];

    function getResultIndex() {
        return identicalCount % 6 === 0 ? 5 : (identicalCount % 6) - 1;
    }

    return (
        <section id="result">
            <div className="container">
                <div className="headline">
                    {aResultText[getResultIndex()]}
                    <p>
                        Letters in pink are found in both of your names. <br />
                        These are the letters we use to calculate the result.
                    </p>
                </div>
                <div className="name-results">
                    <div>
                        <p>Your Name</p>
                        <NameResult
                            chars={person1}
                            identicalChars={identicalChars}
                        ></NameResult>
                    </div>
                    <div>
                        <p>Your crush name</p>
                        <NameResult
                            chars={person2}
                            identicalChars={identicalChars}
                        ></NameResult>
                    </div>
                </div>
                <div>
                    <p>Expecting Different Result?</p>
                    <a href="#" onClick={() => resetForm(false)}>
                        Change the names
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Result;
