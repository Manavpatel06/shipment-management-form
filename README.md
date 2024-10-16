
# Shipment Management Form

This repository contains a web-based **Shipment Management Form** developed using **HTML**, **Bootstrap**, and **JavaScript**. The form enables users to manage shipment details by interacting with the **SHIPMENT-TABLE** in the **DELIVERY-DB** database via **Login2Explore**'s JSONPowerDB (jpdb) API. The form allows users to add and update shipment records, ensuring that **Shipment No.** acts as the primary key.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Form Workflow](#form-workflow)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input fields to manage shipment data:
  - **Shipment No.** (Primary Key)
  - **Description**
  - **Source**
  - **Destination**
  - **Shipping Date**
  - **Expected Delivery Date**
- Buttons for **Save**, **Change**, and **Reset** functionality.
- Validation to ensure that no empty fields are submitted.
- Integration with **Login2Explore's JSONPowerDB** to save and update shipment data.
  
## Installation

### Prerequisites

- **Node.js** and **npm** (optional, if you want to run the project on a local server).
- Basic knowledge of HTML, CSS, JavaScript, and JSON.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shipment-management-form.git
   ```
2. Open the project folder:
   ```bash
   cd shipment-management-form
   ```
3. Open the `index.html` file in any browser to run the form.

### Optional: Run on a local server

You can use any local server like **Live Server** or **http-server** to run the project.

## Usage

1. Open the **Shipment Management Form** in your browser.
2. Enter a **Shipment No.** to manage shipment details.
3. Based on whether the shipment exists in the database, the form will either allow you to **save** new shipment data or **change** existing data.

### Shipment Form Fields

- **Shipment No.**: A unique identifier for the shipment. Acts as the primary key.
- **Description**: A description of the shipment.
- **Source**: The origin location of the shipment.
- **Destination**: The destination location of the shipment.
- **Shipping Date**: The date the shipment is sent.
- **Expected Delivery Date**: The expected delivery date of the shipment.

### Buttons

- **Save**: Stores new shipment data in the **DELIVERY-DB**.
- **Change**: Updates existing shipment data based on the **Shipment No.**.
- **Reset**: Resets the form fields.

## File Structure

```bash
shipment-management-form/
│
├── index.html          # Main HTML file for the form
├── ShipmentForm.js     # JavaScript logic for interacting with the form and jpdb API
├── README.md           # Project documentation (this file)
```

## Form Workflow

1. **Form Initialization**: 
   - On page load, only the **Shipment No.** field is active, while other fields and buttons are disabled.
2. **New Shipment Entry**:
   - Enter a unique **Shipment No.**.
   - If the **Shipment No.** is not found in the database, the rest of the form fields will be enabled for data entry, and the **Save** and **Reset** buttons will also be enabled.
3. **Existing Shipment Update**:
   - Enter a **Shipment No.**.
   - If the **Shipment No.** already exists in the database, the existing shipment details will be populated in the form fields, and the **Change** and **Reset** buttons will be enabled.
4. **Save/Change**: 
   - Once all required fields are filled, clicking **Save** or **Change** will store or update the shipment record in the database.
5. **Reset**:
   - Clicking **Reset** will clear all fields and reset the form to its initial state.

## Technologies Used

- **HTML5**: For creating the structure of the form.
- **Bootstrap**: For styling and layout.
- **jQuery**: For form validation and AJAX requests.
- **JavaScript**: For logic and API integration.
- **Login2Explore JSONPowerDB**: To interact with the **SHIPMENT-TABLE** in the **DELIVERY-DB** database.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Please follow the standard GitHub workflow for collaboration:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

