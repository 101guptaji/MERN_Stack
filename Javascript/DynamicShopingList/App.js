/*Dynamic Shopping List Application

    Create a dynamic shopping list application that allows users to add items and calculate the grand total.

    Requirements:
    
    Functional Requirements
    Input Fields: Display two input fields to accept item name and price.
    Add Button: Render a button with "Add" text.
    Table Update: Update and render the list in a table when the "Add" button is clicked.
    
    UI Requirements:
    Table Labels: Use data-ns-test="item-name" and data-ns-test="item-price" to label name and price columns.
    Input Field IDs: Use item-name-input and item-price-input as IDs for name and price input fields.
    
    Calculation Requirements
    Grand Total: Display the total price in an element with data-ns-test="grandTotal".
    Initial Table State: Display a table with one row showing grandTotal as 0.
    
    Validation Requirements
    Input Validation: Prevent invalid input (non-numeric price, empty name).
    Clear Input Fields: Clear input fields after adding an item.

*/

// Create table heading
const tableHeading = document.createElement('tr');
tableHeading.innerHTML = `
    <tr>
        <th>Sr. No.</th>
        <th>Title</th>
        <th>Price</th>
    </tr>
    `;

const rows = [];
/**

 * Submits a new item and updates the table.

 */
function submitItem(){
    let item_name = document.getElementById("item-name-input");
    let item_price = document.getElementById("item-price-input");

    if(item_name.value!=="" && item_price.value!==""){
        const newItem = {
            id : rows.length+1,
            name : item_name.value,
            price: item_price.value
        }
        //console.log(newItem);
        rows.push(newItem);

        item_name.value = "";
        item_price.value = "";

        //update table
        const table = document.getElementsByTagName("table")[0];
        table.innerHTML = "";
        table.appendChild(tableHeading);
        rows.forEach((row) => table.appendChild(createRow(row)));
        table.appendChild(calculateTotal(rows));
    }
}

/**

 * Creates a table row from data.

 * @param {Object} data - Data object containing index, name, and price.

 * @returns {HTMLElement} Table row element.

 */
function createRow(data) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${data.id}</td>
        <td data-ns-test="item-name">${data.name}</td>
        <td data-ns-test="item-price">${data.price}</td>`;
    
    return tableRow;
}

/**

 * Calculates and creates a table row for the total.

 * @param {Array} data - Array of data objects.

 * @returns {HTMLElement} Table row element.

 */
function calculateTotal(data) {
    let total = 0;
    for(let row of data){
        total += parseInt(row.price);
    }
    console.log(total);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
      <td colspan="2">Grand Total</td>
      <td data-ns-test="grandTotal">${total}</td>`;
  
    return totalRow;
  
  }