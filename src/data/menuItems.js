const menuItems = [
  {
    menu: "Members",
    submenu: [
      { item: "Add Member", url: "/new_member" },
      { item: "View Members", url: "/view_members" }
    ]
  },
  {
    menu: "Contributions",
    submenu: [
      { item: "Savings", url: "/savings" },
      { item: "Other Contributions", url: "/other_contributions" }
    ]
  },
  {
    menu: "Loans",
    submenu: [
      { item: "Approve Loan", url: "/approve_loan" },
      { item: "Loan Balance", url: "loan_balance" }
    ]
  },
  {
    menu: "Fines",
    submenu: [
      { item: "Approve Loan", url: "/approve_loan" },
      { item: "Loan Balance", url: "loan_balance" }
    ]
  }
];

export default menuItems;
