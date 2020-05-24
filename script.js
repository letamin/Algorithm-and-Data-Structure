const dataStructureArray = Array.from(document.querySelectorAll(".data-structure"));
const tableContentContainer = document.querySelector(".table-contents-container");
const illustrationContainer = document.querySelector('.illustration-container');
const codeContainer = document.querySelector('.code-container');
const burgerButton = document.querySelector('.burger');

const dataStructureObjec = [
    {
        name: "Linked List",
        description:
            "In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.",
        operation: ['Insert', 'Search', 'Delete', 'Traverse', 'Complexity'],
        complexity: {
            acess: 'O(n)',
            search: 'O(n)',
            insertion: 'O(1)',
            deletion: 'O(n)'
        }
    },
    {
        name: "Double Linked List",
        description: "A single linked list consists of nodes that each have a single pointer to the next node in the list. Singly linked lists often require traversal of the entire list for operations, and as such, have generally poor performance. One way to improve the performance of linked lists is to add a second pointer on each node that points to the previous node in the list. A linked list whose nodes point to both the previous and next nodes is called a doubly linked list.",
        operation: ['Insert', 'Search', 'Delete', 'Traverse', 'Complexity'],
        complexity: {
            acess: 'O(n)',
            search: 'O(n)',
            insertion: 'O(1)',
            deletion: 'O(n)'
        }
    },
];

initialize();

function initialize() {
    burgerActive();
}
dataStructureArray.forEach((data) => {
    data.addEventListener('click', getName);
});

function getName(event) {
    dataStructureObjec.find((obj) => {
        if (obj.name == event.target.innerHTML) {
            getInformation(obj);
        }
        tableContentContainer.classList.add('background-color');
    });
}

function getInformation(dataObject) {
    clearScreen();
    displayTitleTableContainer(dataObject);
    displayTableContent(dataObject);
}

function displayTitleTableContainer(dataObject) {
    var dataTitle = document.createElement("div");
    dataTitle.innerHTML = dataObject.name;
    dataTitle.classList.add("title");
    tableContentContainer.appendChild(dataTitle);

    dataTitle.addEventListener('click', () => {
        clearScreen();
        displayTitleTableContainer(dataObject);
        displayIntro(dataObject);
        displayTableContent(dataObject);
    })
}

//Display the operations table and event listener when user click on them
function displayTableContent(dataObject) {
    var dataOperationArray = [];
    var dataOperationUL = document.createElement('ul');
    dataObject.operation.forEach((_dataObjec, index) => {
        dataOperationArray[index] = document.createElement('li');
        dataOperationArray[index].innerHTML = dataObject.operation[index];
        dataOperationUL.classList.add('operation');
        dataOperationUL.appendChild(dataOperationArray[index]);
    })
    tableContentContainer.appendChild(dataOperationUL)

    //Loop all the operations and add event listener
    dataOperationArray.forEach(data => {
        data.addEventListener('click', () => {
            tableContentContainer.classList.remove('burger-active');
            data.classList.remove('toggle-choose');
            switch (data.innerHTML) {
                //Linked List insert
                case 'Insert':
                    removeChooseToggleOperation(dataOperationArray);
                    data.classList.add('toggle-choose');
                    clearIllutratrion();
                    clearCode();
                    var linkedListInsertIllustration = document.createElement('div');
                    linkedListInsertIllustration.innerHTML =
                        `<div class="head-null-insert">
                        <h3>If head = null (Nothing on the list yet)</h3>
                        <div class="linklist-illu-intro-container">
                            <div class="cell-container">
                                <div class="cell">37</div>
                                <div class="cell"><i
                                        class="fas fa-long-arrow-alt-right icon appear-pointer-linked-list"></i></div>
                                </div>
                                <div class="cell-container">
                                    <div class="cell null"></div>
                                </div>
                            </div>
                        </div>
                        <div class="normal-insert">
                            <h3>Else (Normal insertion)</h3>
                            <div class="linklist-illu-intro-container">
                                <div class="cell-container">
                                    <div class="cell">99</div>
                                    <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                                </div>
                                <div class="cell-container">
                                    <div class="cell">37</div>
                                    <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                                </div>
                                <div class="cell-container">
                                    <div class="cell tobe-inserted-cell">27</div>
                                    <div class="cell added-cell">27
                                    </div>
                                    <div class="cell new-cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                                    <div class="cell null remove-move-right"></div>
                                </div>
                            </div>
                        </div>`
                    linkedListInsertIllustration.classList.add('linkList-insert-illu');
                    illustrationContainer.appendChild(linkedListInsertIllustration);

                    addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                    break;
                //Linked List search
                case 'Search':
                    removeChooseToggleOperation(dataOperationArray);
                    data.classList.add('toggle-choose');
                    clearCode();
                    clearIllutratrion();

                    var linkedListSearchIllustration = document.createElement('div');
                    linkedListSearchIllustration.innerHTML =
                        `<h3>Search for value 37 in the Linked List</h3>
                        <div class="linklist-illu-intro-container">
                            <div class="cell-container">
                                <div class="cell search-cell">12</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell search-cell">99</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell search-cell">37</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell null"></div>
                            </div>
                        </div>
                        <h3 class="text-result">Return true as 37 is in the Linked List</h3>`
                    linkedListSearchIllustration.classList.add('flex-container');
                    illustrationContainer.appendChild(linkedListSearchIllustration);

                    const searchCells = Array.from(document.querySelectorAll('.search-cell'));
                    searchCells.forEach((cell, index) => {
                        cell.style.animation = `lightUp 2s ease ${index + 1.5}s `
                    })

                    addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                    break;
                //Linked List Delete
                case 'Delete':
                    removeChooseToggleOperation(dataOperationArray);
                    data.classList.add('toggle-choose');
                    clearCode();
                    clearIllutratrion();

                    var linkedListDeleteIllustration = document.createElement('div');
                    linkedListDeleteIllustration.innerHTML =
                        `<h3>Delete 37 from the Linked List</h3>
                        <div class="linklist-illu-intro-container">
                            <div class="cell-container">
                                <div class="cell delete-cell">99</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container tobe-deleted">
                                <div class="cell delete-cell">37</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container remove-move-left">
                                <div class="cell">27</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell null remove-move-left-2"></div>
                            </div>
                        </div>
                        <h3 class="text-result-2">37 is deleted in the Linked List</h3>`
                    linkedListDeleteIllustration.classList.add('normal-insert');
                    illustrationContainer.appendChild(linkedListDeleteIllustration);

                    const deleteCells = Array.from(document.querySelectorAll('.delete-cell'));
                    deleteCells.forEach((cell, index) => {
                        cell.style.animation = `lightUp 2s ease ${index + 2.4}s `
                    })

                    addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                    break;
                //Linked List Traverse
                case 'Traverse':
                    removeChooseToggleOperation(dataOperationArray);
                    data.classList.add('toggle-choose');
                    clearCode();
                    clearIllutratrion();

                    var linkedListTraverseIllustration = document.createElement('div');
                    linkedListTraverseIllustration.innerHTML =
                        `<h3>Traverse through the Linked List</h3>
                        <div class="linklist-illu-intro-container">
                            <div class="cell-container">
                                <div class="cell traverse-cell">12</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell traverse-cell">99</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell traverse-cell">37</div>
                                <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                            </div>
                            <div class="cell-container">
                                <div class="cell null"></div>
                            </div>
                        </div>`
                    linkedListTraverseIllustration.classList.add('normal-insert');
                    illustrationContainer.appendChild(linkedListTraverseIllustration);

                    const traverseCells = Array.from(document.querySelectorAll('.traverse-cell'));
                    traverseCells.forEach((cell, index) => {
                        cell.style.animation = `lightUp 2s ease ${index + 1.5}s `
                    })

                    addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                    break;
                //Linked List Complexity table
                case 'Complexity':
                    removeChooseToggleOperation(dataOperationArray);
                    data.classList.add('toggle-choose');
                    clearCode();
                    clearIllutratrion();

                    var complexityTable = document.createElement('table');
                    complexityTable.innerHTML =
                        `<thead>
                        <tr>
                            <th scope="col">Access</th>
                            <th scope="col">Insert</th>
                            <th scope="col">Search</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>O(n)</td>
                                <td>O(1)</td>
                                <td>O(n)</td>
                                <td>O(n)</td>
                            </tr>
                        </tbody>`
                    complexityTable.classList.add('linkedListComplexityTable')
                    complexityTable.style.animation = 'appear 1s ease forwards 0.5s'
                    illustrationContainer.appendChild(complexityTable);
                    break;
            }
        })
    })

    if (!illustrationContainer.hasChildNodes()) {
        displayIntro(dataObject);
    }

}

//Add the code images
function addCodeImage(container, operation, dataStructure) {
    var codeImageContainer = document.createElement('div');
    codeImageContainer.classList.add('code-image-container');
    var urlImageName = dataStructure.replace(' ', '_');
    codeImageContainer.style.setProperty('--img', `url(/image/${urlImageName}_${operation}.png)`);
    container.appendChild(codeImageContainer);
}

function removeChooseToggleOperation(dataOperationArray) {
    dataOperationArray.forEach(data => {
        data.classList.remove('toggle-choose');
    })
}

//Display the object when the user first choose it
function displayIntro(dataObject) {
    switch (dataObject.name) {
        //Linked list intro
        case 'Linked List':
            var linkedListContainerIllustrationInrto = document.createElement('div');
            linkedListContainerIllustrationInrto.innerHTML =
                `<div class="cell-container">
                    <div class="cell">12</div>
                    <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                </div>
                <div class="cell-container">
                    <div class="cell">99</div>
                    <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                </div>
                <div class="cell-container">
                    <div class="cell">37</div>
                    <div class="cell"><i class="fas fa-long-arrow-alt-right icon"></i></div>
                </div>
                <div class="cell-container">
                    <div class="cell null"></div>
                </div>`
            linkedListContainerIllustrationInrto.classList.add('linklist-illu-intro-container');
            illustrationContainer.appendChild(linkedListContainerIllustrationInrto);

            var textIntro = document.createElement('div');
            textIntro.innerHTML = dataObject.description;
            textIntro.classList.add('code')
            codeContainer.appendChild(textIntro);

            break;
    }

}

function burgerActive() {
    burgerButton.addEventListener('click', () => {
        tableContentContainer.classList.toggle('burger-active');
    })
}

//Clear functions. There are clear all on screen, or clear only one of the containers
function clearScreen() {
    while (tableContentContainer.hasChildNodes()) {
        tableContentContainer.removeChild(tableContentContainer.firstChild);
    }
    while (illustrationContainer.hasChildNodes()) {
        illustrationContainer.removeChild(illustrationContainer.firstChild);
    }
    while (codeContainer.hasChildNodes()) {
        codeContainer.removeChild(codeContainer.firstChild);
    }
}

function clearIllutratrion() {
    while (illustrationContainer.hasChildNodes()) {
        illustrationContainer.removeChild(illustrationContainer.firstChild);
    }
}

function clearCode() {
    while (codeContainer.hasChildNodes()) {
        codeContainer.removeChild(codeContainer.firstChild);
    }
}