type NameResult = {
    chars: string[];
    identicalChars: string[];
};

type CSS = {
    textDecoration?: string;
    backgroundColor?: string;
    white?: string;
};

const strikeClass = {
    backgroundColor: "#ff00d6",
    color: "white",
};

const spaceClass = {
    backgroundColor: "white",
};

function generateLetterClass(
    identicalChars: string[],
    char: string
): CSS | undefined {
    if (identicalChars.includes(char)) {
        return strikeClass;
    }
    if (char === " ") {
        return spaceClass;
    }
    return;
}

function NameResult({ chars, identicalChars }: NameResult) {
    return (
        <div className="name-result">
            {chars.map((char, index) => (
                <span
                    key={index}
                    style={generateLetterClass(identicalChars, char)}
                >
                    {char}
                </span>
            ))}
        </div>
    );
}

export default NameResult;
