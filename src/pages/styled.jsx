import styled from "styled-components";

const HomeWrapper = styled.div`
  .dashboard-root {
    display: flex;
    min-height: 100vh;
    background: none;
  }
  .dashboard-main {
    flex: 2;
    padding: 1rem;
    overflow: auto;
  }
  .greeting {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .greeting .highlight {
    color: #222;
  }
  .greeting .dot {
    color: #2196f3;
    font-size: 2.75rem;
  }
  .subtitle {
    font-size: 2rem;
    color: #b0b0b0;
    font-weight: 700;
    margin-bottom: 2.5rem;
  }
  .day-card {
    display: flex;
    background-color: rgba(245, 245, 245, 0.8);
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 2rem;
    padding: 1.25rem 2rem 1.25rem 1.5rem;
    align-items: center;
    width: 100%;
    gap: 3rem;
  }
  .day-date {
    font-size: 1.125rem;
    font-weight: 700;
    color: #b0b0b0;
    margin-right: 1.5rem;
    text-align: center;
  }
  .day-date-main {
    font-size: 1.125rem;
    font-weight: 700;
  }
  .day-date-main .big {
    font-size: 2.5rem;
    color: #222;
    font-weight: 700;
  }
  .day-info {
    flex: 1;
  }
  .meeting-title {
    font-size: 2rem;
    font-weight: 500;
    color: #c80d45;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    .meeting-title {
      font-size: 1rem;
    }
  }
  .meeting-links a {
    color: #2196f3;
    font-size: 1rem;
    margin-right: 1.25rem;
    text-decoration: none;
  }
  .task-list {
    margin-bottom: 2rem;
  }
  .task-card {
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 1.25rem;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .task-card.task-done {
    background: #e6f9ed;
    border: 0.1rem solid #2ecc40;
  }
  .task-card.task-overdue {
    background: #fff0f0;
    border: 0.1rem solid #ff4d4f;
  }
  .task-edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 0.5rem;
  }
  .task-meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #b0b0b0;
    font-weight: 500;
    gap: 0.5rem;
  }
  .task-title {
    font-size: 1.125rem;
    color: #222;
    font-weight: 500;
  }
  .edit-area {
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 0.0625rem solid #d9d9d9;
    font-size: 1rem;
    color: #222;
    resize: none;
  }
  .add-task-bar {
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.06);
    color: #b0b0b0;
    font-weight: 500;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .add-task-bar .plus {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .home-task {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 3rem;
  }
  .home-task .task-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default HomeWrapper;
