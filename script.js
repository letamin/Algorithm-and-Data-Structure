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
        operation: ['Insert', 'Search', 'Delete', 'Traverse', 'Complexity']
    },
    {
        name: "Queue",
        description: "In computer science, a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principle (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.",
        operation: ['Enqueue', 'Dequeue', 'Peek', 'isEmpty-isFull', 'Complexity']
    },
    {
        name: "Stack",
        description: "In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: <br>• Push (adds a element to the collection ) and <br>• Pop (removes the most recently added element that was not yet remove). <br>The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name stack for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.",
        operation: ['Push', 'Pop', 'Peek', 'isEmpty-isFull', 'Complexity'],
        complexity: {
            push: 'O(1)',
            pop: 'O(1)',
            peek: 'O(1)'
        }
    },
];

initialize();

function initialize() {
    burgerActive();
    dataStructureArray.forEach((data) => {
        data.addEventListener('click', getName);
    });
}

//Get the operation name
function getName(event) {
    dataStructureObjec.find((obj) => {
        if (obj.name == event.target.innerHTML) {
            getInformation(obj);
        }
        tableContentContainer.classList.add('background-color');
    });
}

//Display the table of contens for the selected data object
function getInformation(dataObject) {
    clearScreen();
    displayTitleTableContainer(dataObject);
    displayTableContent(dataObject);
}

//Display the name (title) of the selected data object in the table of contents
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
        tableContentContainer.classList.remove('burger-active');
    })
}

//Display the operations table and event listener when user click on them
function displayTableContent(dataObject) {
    var dataOperationArray = [];
    var dataOperationUL = document.createElement('ul');
    dataObject.operation.forEach((_dataObject, index) => {
        dataOperationArray[index] = document.createElement('li');
        dataOperationArray[index].innerHTML = dataObject.operation[index];
        dataOperationUL.appendChild(dataOperationArray[index]);
    })
    dataOperationUL.classList.add('operation');
    tableContentContainer.appendChild(dataOperationUL)

    displayOperation(dataObject, dataOperationArray);

    if (!illustrationContainer.hasChildNodes()) {
        displayIntro(dataObject);
    }

}

//Operations of the selected data object
function displayOperation(dataObject, dataOperationArray) {
    if (dataObject.name == 'Linked List') {
        dataOperationArray.forEach(data => {
            data.addEventListener('click', () => {
                tableContentContainer.classList.remove('burger-active');
                data.classList.remove('toggle-choose');
                switch (data.innerHTML) {
                    //Linked List insert
                    case 'Insert':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

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
                        clearEverythingForOperationDisplay(data, dataOperationArray);

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
                            <h3 class="text-result-medium">Return true as 37 is in the Linked List</h3>`
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
                        clearEverythingForOperationDisplay(data, dataOperationArray);

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
                            <h3 class="text-result-slow">37 is deleted in the Linked List</h3>`
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
                        clearEverythingForOperationDisplay(data, dataOperationArray);

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
                        clearEverythingForOperationDisplay(data, dataOperationArray);

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
                        addComplexityTable(complexityTable);
                        break;
                }
            })
        })
    } else if (dataObject.name == 'Queue') {
        dataOperationArray.forEach(data => {
            data.addEventListener('click', () => {
                tableContentContainer.classList.remove('burger-active');
                data.classList.remove('toggle-choose');
                switch (data.innerHTML) {
                    case 'Enqueue':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var queueEnqueueIllustration = document.createElement('div');
                        queueEnqueueIllustration.innerHTML =
                            `<div class="linklist-illu-intro-container">
                                <div class="cell-container">
                                    <div class="cell tobe-inserted-queue">9<i
                                            class="fas fa-long-arrow-alt-right icon disappear"></i></div>
                                </div>
                                <div class="cell-container queue-illu-intro-container">
                                    <div class="cell inserted-queue">9</div>
                                    <div class="cell">26</div>
                                    <div class="cell">7</div>
                                    <div class="cell">5<i class="fas fa-long-arrow-alt-right icon"></i></div>
                                </div>
                            </div>
                            <h3 class="text-result-fast">9 is added to the rear of the Queue</h3>`
                        queueEnqueueIllustration.classList.add('flex-container');
                        illustrationContainer.appendChild(queueEnqueueIllustration);

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'Dequeue':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var queueDequeueIllustration = document.createElement('div');
                        queueDequeueIllustration.innerHTML =
                            `<div class="linklist-illu-intro-container queue">
                                <div class="cell-container queue-illu-intro-container queue">
                                    <div class="cell transparent">9</div>
                                    <div class="cell">1</div>
                                    <div class="cell">26</div>
                                    <div class="cell">7</div>
                                    <div class="cell tobe-inserted-queue">5<i class="fas fa-long-arrow-alt-right icon disappear"></i></div>
                                </div>
                            </div>
                            <h3 class="text-result-fast">5 is removed from the front of the Queue</h3>`
                        queueDequeueIllustration.classList.add("flex-container");
                        illustrationContainer.appendChild(queueDequeueIllustration);

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'Peek':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var queuePeekIllustration = document.createElement('div');
                        queuePeekIllustration.innerHTML =
                            `<div class="linklist-illu-intro-container">
                                <div class="cell-container queue-illu-intro-container">
                                    <div class="cell">9</div>
                                    <div class="cell">1</div>
                                    <div class="cell">26</div>
                                    <div class="cell">7</div>
                                    <div class="cell found-fast">5<i class="fas fa-long-arrow-alt-right icon"></i></div>
                                </div>
                            </div>
                            <h3 class="text-result-fast">5 is return as the value at the front of the Queue</h3>`
                        queuePeekIllustration.classList.add('flex-container');
                        illustrationContainer.appendChild(queuePeekIllustration);

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'isEmpty-isFull':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var isEmptyIsNull = document.createElement('div');
                        isEmptyIsNull.innerHTML =
                            `<div class="head-null-insert">
                                <h3>Is Empty</h3>
                                <h4 class="text-result-fast">Return false as the Queue is not empty</h4>
                                <div class="linklist-illu-intro-container">
                                    <div class="linklist-illu-intro-container">
                                        <div class="cell-container queue-illu-intro-container">
                                            <div class="cell transparent">1</div>
                                            <div class="cell transparent">26</div>
                                            <div class="cell">7</div>
                                            <div class="cell">5<i class="fas fa-long-arrow-alt-right icon"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="normal-insert">
                                <h3>Is Full</h3>
                                <h4 class="text-result-fast">Return true as the Queue is full</h4>
                                <div class="linklist-illu-intro-container">
                                    <div class="linklist-illu-intro-container">
                                        <div class="cell-container queue-illu-intro-container">
                                            <div class="cell">1</div>
                                            <div class="cell">26</div>
                                            <div class="cell">7</div>
                                            <div class="cell">5<i class="fas fa-long-arrow-alt-right icon"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                        isEmptyIsNull.classList.add('linkList-insert-illu');
                        illustrationContainer.appendChild(isEmptyIsNull)

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'Complexity':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var complexityTable = document.createElement('table');
                        complexityTable.innerHTML =
                            `<thead>
                                <tr>
                                    <th scope="col">Enqueue</th>
                                    <th scope="col">Dequeue</th>
                                    <th scope="col">Peek</th>
                                    <th scope="col">isEmpty<br>isFull</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                    <td>O(1)</td>
                                </tr>
                            </tbody>`

                        addComplexityTable(complexityTable);
                        break;
                }
            })
        })
    } else if (dataObject.name == 'Stack') {
        dataOperationArray.forEach(data => {
            data.addEventListener('click', () => {
                tableContentContainer.classList.remove('burger-active');
                data.classList.remove('toggle-choose');
                switch (data.innerHTML) {
                    case 'Push':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var stackPushIllustration = document.createElement('div');
                        stackPushIllustration.innerHTML =
                            `<div class="stack-illu-container cell-container-col">
                                <div class="cell tobe-inserted-stack">1</div>
                                <div class="cell">26</div>
                                <div class="cell">7</div>
                            </div>
                            <h3 class="text-result-medium">1 is added to the end of the Stack</h3>`
                        stackPushIllustration.classList.add('flex-container');
                        illustrationContainer.appendChild(stackPushIllustration);

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'Pop':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        var stackPopIllustration = document.createElement('div');
                        stackPopIllustration.innerHTML =
                            `<div class="stack-illu-container cell-container-col">
                                <div class="cell tobe-removed-stack">1</div>
                                <div class="cell">26</div>
                                <div class="cell">7</div>
                            </div>
                            <h3 class="text-result-medium">1 is removed from the end of the Stack</h3>`
                        stackPopIllustration.classList.add('flex-container')
                        illustrationContainer.appendChild(stackPopIllustration);

                        addCodeImage(codeContainer, data.innerHTML, dataObject.name);
                        break;
                    case 'Peek':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        addCodeImage();
                        break;
                    case 'Complexity':
                        clearEverythingForOperationDisplay(data, dataOperationArray);

                        addComplexityTable();
                        break;
                }
            })
        })
    }
    // else if (dataObject.name == 'Stack') {
    //     dataOperationArray.forEach(data => {
    //         data.addEventListener('click', () => {
    //             tableContentContainer.classList.remove('burger-active');
    //             data.classList.remove('toggle-choose');
    //             switch (data.innerHTML) {
    //                 case 'Push':
    //                     clearEverythingForOperationDisplay(data, dataOperationArray);

    //                     addCodeImage();
    //                     break;
    //                 case 'Pop':
    //                     clearEverythingForOperationDisplay(data, dataOperationArray);

    //                     addCodeImage();
    //                     break;
    //                 case 'Peek':
    //                     clearEverythingForOperationDisplay(data, dataOperationArray);

    //                     addCodeImage();
    //                     break;
    //                 case 'Complexity':
    //                     clearEverythingForOperationDisplay(data, dataOperationArray);

    //                     addComplexityTable();
    //                     break;
    //             }
    //         })
    //     })
    // }

}

//Add the complexity table for the selected data object
function addComplexityTable(complexityTable) {
    complexityTable.classList.add('complexityTable');
    complexityTable.style.animation = 'appear 1s ease forwards 0.5s'
    illustrationContainer.appendChild(complexityTable);
}

/*Clear everything on the screen and also the animation for the selected operation in the table of contents before displaying the new opertion*/
function clearEverythingForOperationDisplay(data, dataOperationArray) {
    removeChooseToggleOperation(dataOperationArray);
    data.classList.add('toggle-choose');
    clearCode();
    clearIllutratrion();
}

//Add the code images
function addCodeImage(container, operation, dataStructure) {
    var codeImageContainer = document.createElement('div');
    codeImageContainer.classList.add('code-image-container');
    var urlImageName = dataStructure.replace(' ', '_');
    codeImageContainer.style.setProperty('--img', `url(/image/${urlImageName}_${operation}.png)`);
    container.appendChild(codeImageContainer);
}

/*In the table of contents, when selecting an operation, there will be a animation for the selected one. 
  This function will remove that animation before displaying the animation for the new selected operation */
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
                `<h3 class="header">Linked List</h3>
                    <div class="linklist-illu-intro-container">
                    <div class="cell-container">
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
                    </div>
                </div>`
            introTextAndIllustrationDisplay(dataObject, linkedListContainerIllustrationInrto);
            break;
        //Queue intro
        case 'Queue':
            var queueContainerIllustrationIntro = document.createElement('div');
            queueContainerIllustrationIntro.innerHTML =
                `<h3 class="header">Queue</h3>
                <div class="linklist-illu-intro-container">
                    <div class="cell-container">
                        <div class="cell">9<i class="fas fa-long-arrow-alt-right icon"></i></div>
                    </div>
                    <div class="cell-container queue-illu-intro-container">
                        <div class="cell">1</div>
                        <div class="cell">26</div>
                        <div class="cell">7</div>
                        <div class="cell">5<i class="fas fa-long-arrow-alt-right icon"></i></div>
                    </div>
                </div>`
            introTextAndIllustrationDisplay(dataObject, queueContainerIllustrationIntro);
            break;
        case 'Stack':
            var stackContainerIllustrationIntro = document.createElement('div');
            stackContainerIllustrationIntro.innerHTML =
                `<h3 class="header">Stack</h3>
                <div class="stack-illu-intro-container">
                    <i class="fas fa-reply icon-rotate"></i>
                    <div class="cell">1</div>
                    <div class="cell">26</div>
                    <div class="cell">7</div>
                    <div class="cell">9</div>
                </div>`
            introTextAndIllustrationDisplay(dataObject, stackContainerIllustrationIntro);
            break;
    }
}

//Display the Intro text and illustration of the selected data object
function introTextAndIllustrationDisplay(dataObject, introDiv) {
    introDiv.classList.add('flex-container');
    illustrationContainer.appendChild(introDiv);
    var textIntro = document.createElement('div');
    textIntro.innerHTML = dataObject.description;
    textIntro.classList.add('code')
    codeContainer.appendChild(textIntro);
}

//The burger button to display table of contents for mobile display
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