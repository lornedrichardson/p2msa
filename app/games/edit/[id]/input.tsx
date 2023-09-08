const Input = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Casino:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Machine</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Session Start</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Session End</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Game Type:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Game Name:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Wager Amount:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Wager Number:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount Win:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount Loss:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Note:</label>
                    <input type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input