# Server Documentation

## How to run server
From the root, run node server/index.js

## Endpoints

### Dish List

#### Single Dish Query
Route: /dish_list?id={id}
Ex: http://localhost:3000/dish_list?id=3
Ex Response: {"dish_id":3,"dish_name":"bigger_plate","number_entrees":3,"number_sides":1,"price":"9.65"}

#### Order Price Query By Name
Route: /dish_list/price?dish_id={id}&item={item_name}&item={item_name}...
Ex: http://localhost:3000/dish_list/price?dish_id=1&item=honey_seasame_chicken&item=black_pepper_angus_steak&item=fried_rice
Ex Response: {"price":16.79}

#### Order Price Query By ID
Route: /dish_list/price_by_id?dish_id={id}&item={item_id}&item={item_id}...
Ex: http://localhost:3000/dish_list/price_by_id?dish_id=1&item=2&item=5&item=10
Ex Response: {"price":16.79}

### Inventory

#### Single Inventory Item Query
Route: /inventory?id={id}
Ex: http://localhost:3000/inventory?id=3
Ex Response: {"item_id":3,"item_name":"black_pepper_angus_steak","servings":"12.00","restock_quantity":300,"item_price":"4.02","food_type":"entree","minimum_amount":50}

Route: /inventory?name={name}
Ex: http://localhost:3000/inventory?name=black_pepper_angus_steak
Ex Response: {"item_id":3,"item_name":"black_pepper_angus_steak","servings":"12.00","restock_quantity":300,"item_price":"4.02","food_type":"entree","minimum_amount":50}

#### Subtract Servings From Item
Route: /inventory/subtract?id={id}&servings={number of servings}
Ex: http://localhost:3000/inventory/subtract?id=3&servings=1
Ex Response: No response

#### Update Servings For Item
Route: /inventory/update_servings?id={id}&servings={number of servings}
Ex: http://localhost:3000/inventory/update_servings?id=3&servings=12
Ex Response: No response

#### Update Price For Item
Route: /inventory/update_price?id={id}&price={new price}
Ex: http://localhost:3000/inventory/update_price?id=3&price=4.01
Ex Response: No response

#### Get Full Inventory
Route: /inventory/summary
Ex: http://localhost:3000/inventory/summary
Ex Response: \[{"item_id":5,"item_name":"sweetfire_chicken_breast","servings":"130.00","restock_quantity":300,"item_price":"3.21","food_type":"entree","minimum_amount":50},...\]

#### Get Next Available Inventory ID
Route: /inventory/nextID
Ex: http://localhost:3000/inventory/nextID
Ex Response: {"nextID":22}

### Order History

#### Single Order Item Query
Route: /order_history?id={id}
Ex: http://localhost:3000/order_history?id=3
Ex Response: {"transaction_id":3,"employee_id":1,"date":"2022-10-01T05:00:00.000Z","type_of_dish":"bigger plate","entree_dish":"honey_seasame_chicken,orange_chicken","entree_amt_servings":"2,4","side_ingredients":"brown_steamed_rice","side_amt_servings":5,"appetizer_ingredients":"chicken_egg_roll","appetizer_amt_servings":1,"price":"13.203985300"}

#### Add Order To History
Route: /order_history?transaction_id={transaction_id}&employee_id={employee_id}&date={date}&type_of_dish={type_of_dish}&entree_dish={entree_dish}&entree_amt_servings={entree_amt_servings}&side_ingredients={side_ingredients}&side_amt_servings={side_amt_servings}&appetizer_ingredients={appetizer_ingredients}&appetizer_amt_servings={appetizer_amt_servings}&price={price}

Ex Response: No Response

#### Get Next Available Order ID
Route: /order_history/nextID
Ex: http://localhost:3000/order_history/nextID
Ex Response: {"nextID":5538}

### Roster

#### Single Employee Query
Route: /roster?id={id}
Ex: http://localhost:3000/roster?id=3
Ex Response: {"employee_id":3,"employee_name":"Jackie Wells","is_manager":false}

#### Delete Employee
Route: /roster/delete?name={employee_name}
Ex: http://localhost:3000/roster/delete?name=Jackie%20Wells
Ex Response: No response
Note: '%20' represents a space in the database entry

#### Add Employee 
Route: roster/add?id={id}&name={employee_name}}&manager={1 for manager, 0 for not}
Ex: http://localhost:3000/roster/add?id=3&name=Jackie%20Wells&manager=0
Ex Response: No response

#### Get Next Available Employee ID
Route: /roster/nextID
Ex: http://localhost:3000/roster/nextID
Ex Response: {"nextID":11}
