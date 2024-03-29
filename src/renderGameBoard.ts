const renderGameBoard = (
  parentElement: HTMLElement,
  gameBoard: string[] | number[],
  hideGrid?: boolean
) => {
  //remove already rendered elements
  while (parentElement.firstElementChild) {
    parentElement.firstElementChild.remove();
  }
  gameBoard.forEach((grid, index) => {
    const gridDiv: HTMLDivElement = document.createElement("div");
    if (grid === "Missed") {
      gridDiv.classList.add("missed");
    } else if (grid === "Hit") {
      gridDiv.classList.add("hit");
    } else if (grid !== "" && hideGrid !== true) {
      gridDiv.classList.add("occupied");
    }
    gridDiv.classList.add("grid");
    gridDiv.setAttribute("id",`${index}`);

    parentElement.appendChild(gridDiv);
  });
};

export default renderGameBoard;
