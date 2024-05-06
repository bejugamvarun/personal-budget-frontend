import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  features = [
    {
      title: 'Create Budget Plans',
      description: 'Plan and set budgets for various categories and activities.',
      image: 'assets/budget-planning-image.jpg'
    },
    {
      title: 'Track Your Expenses',
      description: 'Effortlessly monitor your spending habits and manage expenses.',
      image: 'assets/expense-tracking-image.png'
    },
    {
      title: 'Analyze Financial Trends',
      description: 'Visualize your financial data with insightful charts and graphs.',
      image: 'assets/financial-analysis-image.png'
    }
  ];

  testimonials = [
    {
      quote: "This app changed the way I handle my money. It's simple, powerful, and has made budgeting a breeze!",
      author: 'Sam R Nagiri'
    },
    {
      quote: "I've tried several budgeting apps, but this one stands out for its user-friendly interface and comprehensive features.",
      author: 'Madhu S Reddy'
    }
  ];
}
