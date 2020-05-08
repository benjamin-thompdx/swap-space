## Name of Student: 
Benjamin Thom

## Name of Project: 
SwapSpace

## Project's Purpose or Goal:
The project's purpose is to provide users with a simple way to trade items based on their perceived monetary value.

## List the absolute minimum features the project requires to meet this purpose or goal:
* An NewItemForm.js component with inputs for the item's (Item.js) name, description, image(s), monetaryValue ($0-$20, $20-$40, $40-$60, ...), and zipCode
* A SeeTrades button
* A TradeItemsList.js component with a list of items that match the same monetaryValue of the item being traded
* A TradeItemDetail.js component with the trade item's name, description, image(s), monetary value, and zipCode
* A ProposeTrade button
* A SeeOtherTrades button
* AddNewItem button that returns to the NewItemForm to create add a new item to trade

## What tools, frameworks, libraries, APIs, modules and/or other resources will you use to create this MVP?
* ReactJs
* NodeJs
* ExpressJs
* Bootstrap
* MongoDb

## If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next?
* EditItemForm.js component with inputs to update an item's name, description, image(s), and monetary value ($0-$20, $20-$40, $40-$60, etc.)
  * A UpdateItem button
  * A DeleteItem button
* RegisterForm.js component with inputs for a new user's (User.js) userName, password, and email
  * CreateAccount button
  * ReturnToLogin button
* LoginForm.js component where current users can log in with their userName and password
  * AccountLogin button
  * ReturnToRegister button
* AccountDetail.js component where current users can review their userName, password, and email
  * EditAccount button
* EditAccountForm.js component where current user can update user details (userName, password, or email) or delete account
  * UpdateAccount button
  * DeleteAccount button
* Provide an option to filter the TradeItemList.js component by zipCode

## What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
No additional resources required at this time

## Is there anything else you'd like your instructor to know?
Not at this time