type NameResult = {
    chars: string[];
    identicalChars: string[];
};

const strikeClass = {
    textDecoration: "line-through",
};

function NameResult({ chars, identicalChars }: NameResult) {
    return (
        <div>
            {chars.map((char, index) => (
                <span
                    key={index}
                    style={identicalChars.includes(char) ? strikeClass : {}}
                >
                    {char}
                </span>
            ))}
        </div>
    );
}

export default NameResult;
