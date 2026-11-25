// Entry for make.fun's "Angry Judge: The Short Rant Contest" bounty:
// one short rant (under 400 characters) about an everyday annoyance,
// aimed at a judge with a famously short temper. Mine is for the hold
// music industry, which has taken years from all of us.
// Running the program prints the rant, and nothing else.

/** The rant: the crime, the sentence served, the curse. */
function rantLine(): string {
  const crime =
    "To whoever designed the 'your call is important to us' loop:";
  const sentence =
    "I have aged four years on hold and learned your entire jazz playlist by heart — I play it at funerals now.";
  const curse =
    "May every traffic light you ever meet turn red as you approach it.";
  return `${crime} ${sentence} ${curse}`;
}

console.log(rantLine());
