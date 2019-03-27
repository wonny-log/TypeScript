/// <reference path='fourslash.ts' />

//// const foo = `/*x*/H/*y*/EAD | ${ /* C0 */ 42 /* C1 */}${ /* C2 */ 43 /* C3 */}${ /* C4 */ 44 /* C5 */}`

goTo.select("x", "y");
edit.applyRefactor({
    refactorName: "Convert string concatenation or template literal",
    actionName: "Convert to string concatenation",
    actionDescription: "Convert to string concatenation",
    newContent:
`const foo = "HEAD | " + /* C0 */ 42 /* C1 */ + /* C2 */ 43 /* C3 */ + /* C4 */ 44 /* C5 */`,
});

