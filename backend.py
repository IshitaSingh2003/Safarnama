# -*- coding: utf-8 -*-
"""Backend.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1LtJ4t524kTHxC9pwXlDTVVV_xY6k4xLK
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load the dataset
data = pd.read_csv('TravelPlan_Data.csv')

# Select the relevant columns for training the model
X = data[['from_city', 'to_city', 'mode_of_transfer_within_city', 'no_of_stay_days', 'purpose', 'interests', 'food_choices', 'local_guide']]
y = data['travel_plan']

# Encode categorical features
label_encoder = LabelEncoder()
X_encoded = X.apply(label_encoder.fit_transform)

# Iterate over unique 'to_city' values
predicted_plans = []
for city in X['to_city'].unique():
    # Filter the data for the current 'to_city'
    filtered_X = X_encoded[X['to_city'] == city]
    filtered_y = y[X['to_city'] == city]

    # Check if there are enough data points for training
    if len(filtered_X) < 2:
        print(f"Insufficient data for {city}. Skipping...")
        continue

    # Split the filtered data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(filtered_X, filtered_y, test_size=0.2, random_state=42)

    # Train the decision tree classifier for the current city
    classifier = DecisionTreeClassifier()
    classifier.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = classifier.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, y_pred)
    print('Accuracy for', city, ':', accuracy)

    # Predict a travel plan for the new input
    new_input = {
        'from_city': 'Jaipur',
        'to_city': 'Agra',
        'mode_of_transfer_within_city': 'metro',
        'no_of_stay_days': 3,
        'purpose': 'vacation',
        'interests': 'historical',
        'food_choices': 'local',
        'local_guide': 'yes'
    }

    # Encode the new input
    encoded_input = pd.Series(new_input).to_frame().transpose()

    # Transform the new input using the label encoder
    for column in encoded_input.columns:
        if column in label_encoder.classes_:
            encoded_input[column] = label_encoder.transform(encoded_input[column])
        else:
            encoded_input[column] = -1

    # Make a prediction for the current city
    predicted_plan = classifier.predict(encoded_input)

    # Get the corresponding travel plan for the current city
    city_plans = filtered_y.unique()
    if predicted_plan in city_plans:
        city_plan = city_plans[0]
    else:
        print(f"No plan found for {city}. Skipping...")
        continue

    # Adjust the plan based on the number of stay days
    plan_per_day = city_plan.split('. ')
    adjusted_plan = plan_per_day * (new_input['no_of_stay_days'] // len(plan_per_day))
    remaining_days = new_input['no_of_stay_days'] % len(plan_per_day)
    adjusted_plan += plan_per_day[:remaining_days]

    # Choose the travel plan for the current city
    predicted_plans.append('. '.join(adjusted_plan))

# Choose the travel plan for the corresponding 'to_city'
final_plan = predicted_plans[X['to_city'].unique().tolist().index(new_input['to_city'])]
print('Predicted Travel Plan:', final_plan)