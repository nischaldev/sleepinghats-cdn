## **Visual Widget Builder System: Comprehensive Overview**

### **1\. Introduction to the Visual Widget Builder**

The **Visual Widget Builder** is a powerful, user-friendly tool designed to help users create interactive and responsive web pages. By using a simple drag-and-drop interface, both developers and non-developers can design widgets and pages with ease. The system enables the development of dynamic web components and provides the ability to manage, style, and export them efficiently.

### **2\. Core Features**

#### **Widget Building System**

* **Drag-and-drop Interface:** Build widgets by dragging elements onto the canvas in the **Builder Panel**.  
* **Nested Widgets:** Create parent-child relationships between widgets, allowing for complex layouts and components.  
* **Real-time Preview:** Instantly preview changes as you design, making it easy to refine your widgets.  
* **Widget Versioning:** Widgets can be updated, and each version is saved and posted publicly for easy access.  
* **Seamless Data Integration:** Built on a concept-connection architecture that enables flexible data relationships and can easily integrate with **FreeSchema** Data Fabric.  
* **Uniform Data Communication**: All system interactions, from creating elements to managing widgets, are handled through a consistent concept-connection-based framework that defines the structure of data and relationships. This approach eliminates the need for traditional JSON transformations, ensuring seamless data consistency across the platform.

##### **Code Editors**

* **HTML Editor:** Customize the structure of widgets with HTML content.  
* **CSS Editor:** Style widgets using custom CSS rules for design flexibility.  
* **JavaScript Editor:** Add interactivity and functionality using JavaScript.  
* **Element Attribute System:**  
  * **ID:** Unique identifier for each element.  
  * **Class:** CSS classes for styling.  
  * **Style:** Add inline styles like background color, width, and height directly from the attributes panel.  
  * **Element Content:** Add custom content to elements.  
* **Lifecycle Editors:** Manage lifecycle methods like ***`before render`, `update,` `after render`**,* and ***`mount child`***  to control widgets behavior.

##### **Widget Management**

* **Private & Public Widgets:** Save widgets privately and be able to share them publicly for community use.  
* **Search Functionality:** Easily find and reuse previously saved widgets.

##### **Page Building**

* **Web Pages Creation:** Design complete web pages by combining multiple widgets.  
* **Layout System:** Organize your widgets using a flexible layout grid system.  
* **Preview Pages:** View the page layout in a new window before publishing to ensure everything looks just right.

##### **Element Properties**

* **Custom Attributes:** Customize the attributes of individual elements for further styling and control.  
* **Styling and Layout Controls:** Fine-tune element positioning, size, and appearance.  
* **Event Handling:** Attach events to elements for interactive behavior.

##### **Asset Management**

* **Upload and Manage Assets:** Store and organize assets like images, videos, and other media files.  
* **Asset Library:** Easily access and use your uploaded assets in widgets and pages.

### **3\. User Interface Layout**

![Visual Widget Builder Interface](/images/doc/1.png)

The Visual Widget Builder is organized into three key areas:

* **Left Sidebar (Builder Menu):**
  * **Elements:** Access a variety of components to build your widgets.  
  * **Save Widgets:** Save your widgets privately or publicly.  
  * **Public Widgets:** Browse and manage publicly shared widgets.  
  * **Pages:** Create and manage web pages.  
  * **Layout Options:** Control the structure and positioning of widgets and elements on the page.  
  * **Asset Library:** Upload and reuse the contents on any widget, like images, videos etc  

* **Center (Workspace):** This is where you can design and customize your widgets and pages by dragging and dropping elements from the Builder Menu.

* **Right Sidebar (Properties Panel):**
  * **Widget Lifecycle:** Manage widget lifecycle methods (e.g., `before render`, `after render`, etc.).  
  * **Widget Properties:** Modify properties of the widget, including ID, class, and custom attributes.  
  * **Attributes:** Depending on the element, you can set attributes like **height**, **width**, **bg color**, **color**, **img src**, **onSubmit**, and more. This gives full control over the appearance and behavior of elements.  
  * **CSS:** Apply custom styling to the widget and its elements.  
  * **JavaScript:** Add interactive behavior with custom JavaScript.  
  * **Page Properties:** Modify settings related to page-specific attributes and structure.

### **4. Widget Lifecycle and State Management**

Understanding a widget's lifecycle is essential for managing its behavior. The main lifecycle stages include:

* **before render:** The widget is initialized and added to the page.
* **update:** Triggered when a widget's state or properties changes.  
* **after render:** Event listeners are attached to interact with the widget, once the before render is rendered.  
* **mount child:** Child widgets, if any, are loaded and rendered.

State management ensures that the widget's properties and behaviors are consistent across different stages of the lifecycle. This is controlled via the **StatefulWidget** base class.

#### **Example: Building a Contact Form Widget**

This document walks you through the process of creating a Contact Form Widget with lifecycle method implementations for handling widget rendering, events, and data management.

#### **Step 1: Selector Widget Creation**

The selector widget will handle the contact type selection in the contact form.

##### **1.1 Initial Setup**

* **Create a New Widget**: Start by creating a new widget for the selector.  
* **Drag and Drop a `<select>` Element**: This will be used to allow users to select a contact type.  
* **Set the Select Element's ID**: Assign the ID `contactEntity` to the `<select>` element.  
* **Widget Type Configuration**: No need to set a widget type value for this selector widget.

##### **1.2 Widget Lifecycle Implementation**

##### **A. Before Render**

* Initialize the available contact types before rendering:

```javascript
this.typeValueList = ['the_contact_test', 'the_contact_example'];  
this.render();
```

##### **B. After Render**

* After rendering, populate the select element with the contact types, handle selection changes, and manage the widget state:
```javascript
let typeList = this.typeValueList;  
let selectorType = await this.getElementById('contactEntity');

if (selectorType) {  
  // Clear existing options  
  selectorType.innerHTML = '';
    
  // Populate select element with options  
  typeList.forEach(type => {  
    let newElement = document.createElement('option');  
    newElement.setAttribute('value', type);  
    newElement.innerText = type;  
    selectorType.appendChild(newElement);  
  });

  // Set initial value  
  this.selectedTypeValue = selectorType.value;  
  this.notify();

  // Handle selection changes  
  let that = this;  
  selectorType.onchange = async () => {  
    that.selectedTypeValue = selectorType.value;  
    const conceptType = that.widgetType.match(/\_([^\_]+)$/);  
    const conceptTypeValue = conceptType ? conceptType[1] : '';  
    const userId = await that.getUserId();  
    const keyConcept = await tsccs.MakeTheInstanceConceptLocal(  
      conceptTypeValue,  
      that.selectedTypeValue,  
      false,  
      userId,  
      4,  
      999,  
    );  
    that.data = keyConcept;  
    that.notify();  
  };  
}
```
![Visual Widget Builder Interface](/images/doc/2.png)

##### **1.3 Key Features**

* **Dynamic Option Population**: Populates the select element with predefined contact types.  
* **Handles Selection Changes**: Updates the selected contact type and manages state.  
* **State Management**: Stores the selected contact type and triggers notifications.

#### **Step 2: Contact Form Widget**

Now, let's build the main Contact Form widget, using the previously created Selector widget as a child.

##### **2.1 Create New Widget**

* Create a new widget as `My Contact Form`.  
* Add the `My selector` widget as a child widget.

##### **2.2 Add Form Elements Using Widget Builder**

1. **Drag and Drop Form Container**: Add a form element as the container for all form elements.  
2. Inside the form, add elements in this order:  
   * **Heading**: Set the text to `"Contact Form"`.  
   * **Label for Entity Type**: Set text to `"Entity Type:"`, position it above the selector widget. 
   * **My selector widget**: Drag from Saved Widgets for choosing the Entity Type.
   * **Input for Name**: Set ID to `contactName`, placeholder to `"Enter your name..."`, and add a label with text `"Name:"`.  
   * **Input for Email**: Set ID to `contactEmail`, placeholder to `"Enter your email:"`, and add a label with text `"Email:"`.  
   * **Button for Saving**: Set ID to `contactSave`, and set text to `"Save Contact"`.

##### **2.3 Implement Widget Lifecycle**

##### **A. Before Render**

* Simply render the widget:

```javascript
this.render();
```

##### **B. After Render**

* Implement the button click functionality, form validation, and data handling:
```javascript
const saveButton = document.getElementById('contactSave');
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
if (saveButton) {
  let that = this;
  saveButton.onclick = async () => {
    // Get the selector widget from childWidgets
    const selectorWidget = that.childWidgets[0]; // First child widget is our selector

    if (!selectorWidget || !selectorWidget.selectedTypeValue) {
      alert('Please select an entity type');
      return;
    }

    // Get the selected type from the widget's state
    const selectedType = selectorWidget.selectedTypeValue;

    // Get input values
    const name = nameInput.value;
    const email = emailInput.value;

    if (!name || !email) {
      alert('Please fill all fields');
      return;
    }

    const userId = await that.getUserId();

    // Create main contact concept
    const contactConcept = await tsccs.MakeTheInstanceConceptLocal(
      selectedType,
      ``,
      !0,
      userId,
      4,
      999,
    );

    // Create name concept
    const nameConcept = await tsccs.MakeTheInstanceConceptLocal(
      'contact_name',
      name,
      false,
      userId,
      4,
      999,
    );

    // Create email concept
    const emailConcept = await tsccs.MakeTheInstanceConceptLocal(
      'contact_email',
      email,
      false,
      userId,
      4,
      999,
    );

    // Use the selector widget's data concept if available
    const typeConnection =
      selectorWidget.data ||
      (await tsccs.MakeTheInstanceConceptLocal(
        'entity_type',
        selectedType,
        false,
        userId,
        4,
        999,
      ));

    // Create connections
    await tsccs.CreateConnectionBetweenEntityLocal(
      contactConcept,
      typeConnection,
      'type',
    );
    await tsccs.CreateConnectionBetweenEntityLocal(
      contactConcept,
      nameConcept,
      'name',
    );
    await tsccs.CreateConnectionBetweenEntityLocal(
      contactConcept,
      emailConcept,
      'email',
    );

    await tsccs.LocalSyncData.SyncDataOnline();
    alert(`Contact saved successfully! ID: ${contactConcept?.id}`);

    // Clear form
    nameInput.value = '';
    emailInput.value = '';
  };
}
```
![Visual Widget Builder Interface](/images/doc/3.png)

#### **Step 3: Using the Contact Form**

##### **How to Save a Contact:**

1. **Select the Contact Type**: Choose either `"the_contact_test"` or `"the_contact_example"` from the dropdown.  
2. **Fill in the Contact Details**:  
   * Enter the contact's name in the `"Name"` field.  
   * Enter the contact's email in the `"Email"` field.  
3. **Click the Save Button**: After clicking `"Save Contact"`, the contact will be saved, and a success message will appear.  
4. The form will clear automatically for the next entry.

![Visual Widget Builder Interface](/images/doc/4.png)

---

#### **Step 4: Building a Contact List Widget**

##### **4.1 Create Contact List Widget**

1. **Create a New Widget**: Start by creating a new widget for displaying the contact list.  
2. **Add Elements in Order**:  
   * **Label**: Set text to `"Select Contact Entity Type:"`.  
   * **Select**: Set ID to `"contactTypeSelector"`.  
   * **Div**: Set ID to `"contactList"`.

##### **4.2 Implement Widget Lifecycle**

##### **A. Before Render**

* Initialize available contact types:
```javascript
this.typeValueList = ['the_contact_test', 'the_contact_example'];  
this.render();
```
##### **B. After Render**

* Implement the logic for displaying the contacts based on the selected type:
```javascript
const contactListContainer = document.getElementById('contactList');
const typeSelector = document.getElementById('contactTypeSelector');

if (typeSelector && contactListContainer) {
  // Populate type selector with a default "Select type" option
  let typeList = this.typeValueList;
  typeSelector.innerHTML = `<option value="" disabled selected>Select contact type</option`;
  for (let i = 0; i < typeList.length; i++) {
    let newElement = document.createElement('option');
    newElement.setAttribute('value', typeList[i]);
    newElement.innerText = typeList[i];
    typeSelector.appendChild(newElement);
  }

  async function fetchAndDisplayContacts(selectedType) {
    try {
      if (!selectedType) {
        contactListContainer.innerHTML = '<p>Please select a contact type.</p>';
        return;
      }

      contactListContainer.innerHTML = '<p>Loading contacts...</p>';

      // Create filters
      let filters = [];
      let filter = new tsccs.FilterSearch();
      filter.type = selectedType;
      filter.search = '1';
      filter.logicoperator = '>';
      filter.operateon = selectedType;
      filter.composition = false;
      filters.push(filter);

      // Create name query
      let nameQuery = new tsccs.FreeschemaQuery();
      nameQuery.typeConnection = `${selectedType}_name`;
      nameQuery.name = 'name';

      // Create email query
      let emailQuery = new tsccs.FreeschemaQuery();
      emailQuery.typeConnection = `${selectedType}_email`;
      emailQuery.name = 'email';

      // Setup main query
      let freeschemaQuery = new tsccs.FreeschemaQuery();
      freeschemaQuery.type = selectedType;
      freeschemaQuery.filters = filters;
      freeschemaQuery.name = 'top';
      freeschemaQuery.inpage = 100;
      freeschemaQuery.freeschemaQueries = [nameQuery, emailQuery];
      freeschemaQuery.outputFormat = tsccs.DATAID;

      // Create a subscription variable to manage the subscription
      let subscription = tsccs
        .SchemaQueryListener(freeschemaQuery, '')
        .subscribe((output) => {
          contactListContainer.innerHTML = '';

          if (!output || output.length === 0) {
            contactListContainer.innerHTML =
              '<p>No contacts found for this type.</p>';
            return;
          }

          // Create a styled list container
          const listContainer = document.createElement('ul');
          listContainer.style.cssText = `
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        `;

          output.map((contact, index) => {
            const listItem = document.createElement('li');
            listItem.style.cssText = `
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: relative;
          `;

            let name = 'N/A';
            let email = 'N/A';

            if (contact.data[selectedType]) {
              const contactData = contact.data[selectedType];

              if (contactData[`${selectedType}_name`]?.data?.the_contact_name) {
                name =
                  contactData[`${selectedType}_name`].data.the_contact_name;
              }

              if (
                contactData[`${selectedType}_email`]?.data?.the_contact_email
              ) {
                email =
                  contactData[`${selectedType}_email`].data.the_contact_email;
              }
            }

            listItem.innerHTML = `
            <div style="
              position: absolute;
              top: -10px;
              left: -10px;
              background-color: #6200ee;
              color: white;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: bold;
            ">${index + 1}</div>
            <div style="
              display: grid;
              grid-template-columns: 80px 1fr;
              gap: 10px;
              align-items: center;
            ">
              <div style="font-weight: bold; color: #333;">Name:</div>
              <div style="color: #666;">${name}</div>
              <div style="font-weight: bold; color: #333;">Email:</div>
              <div style="color: #666;">
                <a href="mailto:${email}" style="color: #6200ee; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
          `;

            listContainer.appendChild(listItem);
          });

          contactListContainer.appendChild(listContainer);
          subscription.unsubscribe(); // Unsubscribe after receiving data
        });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      contactListContainer.innerHTML = `<p>Error loading contacts: ${error.message}</p>`;
    }
  }

  let that = this;

  // Don"t fetch on initial load, wait for user selection
  contactListContainer.innerHTML = '<p>Please select a contact type.</p>';

  // Handle type selection change
  typeSelector.onchange = async () => {
    const selectedType = typeSelector.value;
    if (selectedType) {
      await fetchAndDisplayContacts.call(that, selectedType);
    } else {
      contactListContainer.innerHTML = '<p>Please select a contact type.</p>';
    }
  };
}
```
![Visual Widget Builder Interface](/images/doc/5.png)

##### **4.3 Key Features**

* **Default "Select contact type" Option**: Displays an initial prompt to select a type.  
* **Loading States**: Shows a loading message while contacts are being fetched.  
* **Error Handling**: Displays an error message if the contacts fail to load.  
* **Styled Contact Cards**:  
  * Numbered badges.  
  * Name and email display.  
  * Clickable email links.  
  * Shadow effects for better UX.

By following these steps and implementing lifecycle methods, you can create dynamic widgets that handle data updates and interactions efficiently.

#### **Step 5: Using the Contact List Widget**
##### **How to list saved contacts:**

1. **Select the Contact Type**: Choose either `"the_contact_test"` or `"the_contact_example"` from the dropdown.  
2. **View Contact List**:  The widget will automatically display all saved contacts of the selected type, showing each contact's name and email in a numbered card format.
3. **Click the Save Button**: After clicking `"Save Contact"`, the contact will be saved, and a success message will appear.  
4. The form will clear automatically for the next entry.

![Visual Widget Builder Interface](/images/doc/6.png)

### **5\. Creating Widgets and Pages**
##### **Creating Widgets**

Widgets are the core building blocks for web pages. Whether it's a button, form, or interactive component, you can create custom widgets and configure their behavior and appearance.

#### **Steps to Create a Widget:**  
  1. Drag a component (e.g., button, input field) from the **Builder Menu** onto the canvas.  
  2. Style the widget using the **CSS Editor**.  
  3. Add interactivity with the **JavaScript Editor**.  
  4. Define the widget's lifecycle behavior (e.g., `before render`, `after render`).

##### **Creating Pages**

Pages are created by combining multiple widgets. You can arrange them into a layout using the **Builder Panel**.

* **Steps to Create a Page:**  
  1. Drag and drop widgets from the **Builder Menu** into the page.  
  2. Organize the layout with the flexible grid system.  
  3. Preview the page in a new window to check the design.  
  4. Publish the page and make it public for sharing.

### **6\. Exporting and Importing Widgets**

* **Export Widgets:** Export widgets into clean HTML/CSS/JS code, making them easy to integrate into other projects. You can also run the exported project locally for testing.  
* **Import Widgets:** Import external code and convert it into compatible widgets. This ensures easy updates and flexibility when working with external content

### **7\. Technical Architecture**

* **Widget Structure:** The **WidgetTree** class manages the hierarchy of widgets, supporting nested components and generating clean HTML output.  
* **State Management:** Widgets have a dedicated state, managed using the **StatefulWidget** base class, ensuring proper lifecycle management and event handling.  
* **Preview System:** Toggle between editing and preview modes to see live updates as you work on your page or widget.

### **8\. Use Cases**

* **Frontend Developers:** Quickly prototype UI components, test layouts, create reusable widgets, and share them with the community.  
* **Web Designers:** Design custom websites visually, experiment with layouts, manage assets, and customize styling and theming.  
* **Teams:** Collaborate on widget libraries, ensure consistency across pages, and share versioned widgets.  
* **Content Creators:** Build landing pages, create interactive content, manage assets, and preview changes before going live.

By integrating these features, the Visual Widget Builder offers an intuitive platform for designing, managing, and sharing web components, empowering both individuals and teams to create highly functional and interactive web pages efficiently.