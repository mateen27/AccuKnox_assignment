export const initialDashboardData = {
    categories: [
      {
        id: "CSPM",
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: "cloud_accounts",
            name: "Cloud Accounts",
            content: "Connected (1), Not Connected (1)",
            dashboardImage: "https://www.researchgate.net/profile/Nimesh-Ekanayake/publication/336057117/figure/fig2/AS:807248200732672@1569474377580/Age-popularity-as-a-percentage.png",
            graph: true,
            graphType: "circular",
            data: ['Connected (2)', 'Not Connected (2)'],
            color: ['#3e98c7', '#D6D6D6']
          },
          {
            id: "cloud_account_risk_assessment",
            name: "Cloud Account Risk Assessment",
            content: "Failed (1035), Warning (66), Not Available (30), Passed (7928)",
            graph: true,
            graphType: "pie",
            data: ["Failed (1035)", "Warning (66)", "Not Available (30)", "Passed (7928)"],
            value:[20, 8, 70, 2],
            color: ['#b9140f', '#fad732', '#19a55a', '#D6D6D6']
          },
        ]
      },
      {
        id: "CDPM",
        name: "CDPM Executive Dashboard",
        widgets: [
          {
            id: "card_one",
            name: "Top 5 Namespace Specific Alerts",
            content: "No Graph data available!",
            graph: false,
          },
          {
            id: "card_two",
            name: "Workload Alerts",
            content: "No Graph data available!",
            graph: false,
          },
        ]
      },
      {
        id: "Registry Scan",
        name: "Registery Scan",
        widgets: [
          {
            id: "image_risk_assessment",
            name: "Image Risk Assessment",
            content: "1470 Total vulnerabity",
            graph: true,
            graphType: "line",
          },
          {
            id: "image_security_issues",
            name: "Image Security Issues",
            content: "2 Total Images",
            graph: true,
            graphType: "line",
          },
        ]
      }
    ]
  };