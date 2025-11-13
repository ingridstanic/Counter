export const counterHTML = () => {
    const counterSection = document.getElementById("app");

    const counterContainer = document.createElement("div");
    const h1 = document.createElement("h1");
    const counterValue = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");

    counterContainer.id = "counter";
    counterContainer.className = "counterContainer";
    h1.innerHTML = "Räknare";
    counterValue.id = "value"
    counterValue.className = "counterValue";
    counterValue.innerHTML = "0";
    buttonContainer.className = "buttonContainer";
    plusButton.id = "plus";
    plusButton.className = "plusButton";
    plusButton.innerHTML = "+"
    minusButton.id = "minus"
    minusButton.className = "minusButton";
    minusButton.innerHTML = "-";

    counterContainer.appendChild(h1);
    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(buttonContainer);

    buttonContainer.appendChild(minusButton);
    buttonContainer.appendChild(plusButton);

    counterSection?.appendChild(counterContainer);

}