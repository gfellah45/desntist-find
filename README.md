# Practice Summary Card - Frontend Engineer Assessment For Detist Find

This project implements a **Practice Summary Card** component for technical skill assessment of a frontend engineer role at DetistFind.

---

## 🛠 1. Component & Styling Decisions

### Architecture: One Main Card + Subcomponents

I followed the **Atomic Design** principle and the **Single Responsibility Principle (SRP)**:

- **`PracticeSummaryCard`**: Acts as a entry point. It handles data processing with (status derivation) and uses the **Early Return** pattern to switch between `GridView` and `ListView` i decided to add this two view for the card even thou this as not part of the assessment. this was just to further improve user options
- **Atomic Subcomponents**: I extracted `MetricItem`, `MonthlyTrend`, and `RecommendationSection`.
  - **Why?** This prevents JSX bloat, allows independent unit testing of logic (like the trend chart scaling), and makes the design system scalable. If we need a "Compact View" tomorrow, we can reuse these atoms instantly.

### Styling Approach: Tailwind CSS + shadcn/ui

- **Tailwind CSS**: Chosen for development speed it my go to styling options on any project i work on unless specification states otherwise and its ability to handle complex responsive states directly in the markup.
- **shadcn/ui**: Leveraged for its accessible foundation (I Used the Base UI Varient). It provides a high-end, consistent look out-of-the-box while being fully customizable.
- **Micro-Animations**: Used Tailwind's transition and group-hover utilities to create a "premium" feel

### Visual Consistency & Responsiveness

- **Token-based Layout**: Used a consistent spacing scale (`gap-4`, `p-6`) and typography hierarchy.
- **Adaptive Layouts**:
  - **List View**: Stacks vertically and centers on mobile for thumb-friendly interaction, then expands into a multi-column row on desktop.
  - **Grid View**: Uses a dense, auto-filling grid to maximize information density on large monitors.

---

## 📈 2. Scaling & Real-World Use

### Integration into PracticeFuel Dashboard

- **Theming**: The component uses Tailwind's semantic colors (`primary`, `slate`, `amber`). Integration would involve wrapping the dashboard in a CSS variable-based theme provider, allowing the card to adapt to dark mode or branded color schemes instantly without any need for complex tweeks (reason why i love tailwind).
- **Data Fetching**: The component is currently "dumb" . It would be wrapped in a TanStack Query hook at the page level to handle loading/error states seamlessly if we to scale the implementation for real world use.

### If I had "One Extra Day"

1.  **Unit & Interaction Testing**: Adding Vitest and Playwright tests for the view toggle and hover interactions.
2.  **Advanced Accessibility (A11y)**: Adding ARIA labels for the trend charts (specifically describing the growth direction) and ensuring full keyboard navigation.
3.  **Motion API**: Replacing basic CSS transitions with **Framer Motion** for orchestrated entry animations when the dashboard loads.

---

## ⏱ 3. Time Management

The implementation was completed within a **2-hour window**, allocated as follows:

| Task                            | Duration | Focus                                                                                                                                                                   |
| :------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Setup & Research**            | 15 mins  | Initializing shadcn components and defining TypeScript interfaces (I already had an empty tanstack start template which i never used so this help me speed up things ). |
| **Core Layout & Structure**     | 45 mins  | Building the Grid and List view containers and responsive logic.                                                                                                        |
| **Refactoring & Reusability**   | 30 mins  | Extracting atoms (Metrics, Trend, Recommendations) for scalability.                                                                                                     |
| **Styling, Polish & Animation** | 20 mins  | Implementing the premium hover effects and micro-interactions.                                                                                                          |
| **Documentation & Cleanup**     | 10 mins  | Final code audit and writing this README.                                                                                                                               |

---

## 🚀 How to Run

1.  `npm install`
2.  `npm run dev`
3.  Navigate to `localhost` to see the live toggle behavior.
