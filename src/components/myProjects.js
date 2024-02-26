import React from 'react';
import '../App.css';

export const MyProjects = () => {
    return (
        <div className='Project'>
            <div style={{ textAlign: 'center' }}>
                <h1>My Projects</h1>
            </div>
            <div className="project">
                <h2>Housing Price Prediction Model</h2>
                <p>Nov 2023 — Dec 2023</p>
                <ul>
                    <li>Collaborated with 3 other students to analyze the Ames, Iowa Housing dataset using R and various statistical techniques like k-fold cross-validation and AIC-based model selection to identify key factors influencing housing prices</li>
                    <li>Developed robust linear and logistic regression models, determining influential variables such as overall quality, lot size, amenities, and neighborhood factors in determining property sale prices.</li>
                    <li>Employed data cleaning, visualization, and regression techniques to create insightful models, aiding stakeholders in making informed decisions within the Ames housing market.</li>
                </ul>
                <p>Technologies: R, ggplot2, dplyr</p>
            </div>
            <div className="project">
                <h2>WNBA Game Prediction Model</h2>
                <p>Oct 2023</p>
                <ul>
                    <li>Engineered a WNBA game predictor using Python, Pandas, and scikit-learn, achieving 70% accuracy.</li>
                    <li>Utilized game schedule data and advanced player statistics to train the predictive model.</li>
                    <li>Successfully predicted Las Vegas Aces to win Game 1 of the 2023 WNBA Finals</li>
                </ul>
                <p>Technologies: Python, Scikit-Learn, Pandas</p>
            </div>
        </div>
    )
}