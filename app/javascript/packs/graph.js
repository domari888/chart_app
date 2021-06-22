import { Chart } from "chart.js/dist/chart";

// turbolinksの読み込みを待つためのコードを追加しておく必要がある
document.addEventListener("turbolinks:load", () => {
  // 折れ線グラフのデータ
  const lineLabel = ["1/1", "1/2", "1/4", "1/5", "1/6", "1/7"]
  const lineData = [60.3, 61.1, 60.8, null, 60.5, 61.4]

  // 折れ線グラフのオプション
  const lineChartData = {
    labels: lineLabel,
    datasets: [{
        label: "体重(kg)",
        data: lineData,

        // グラフの色を変更
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        spanGaps: true
      }]
  }

  const lineChartOption = {
    title: {
      display: true,
      text: "ここにタイトルを記載できます"
    },
    tooltips: {
      callbacks: {
        // ホバー（スマホならタップ）時のラベル表示を変更
        title: function (tooltipItems) {
          return tooltipItems[0].xLabel.replace(/^(\d+).(\d+)$/, "$1月 $2月")
        },
        label: function (tooltipItems) {
          return "体重: " + tooltipItems.yLabel + "kg"
        }
      }
    }
  }

  // 折れ線グラフを表示
  const lineChartContext = document.getElementById('line-chart').getContext('2d')
  new Chart(lineChartContext, {
    type: 'line',
    data: lineChartData,
    options: lineChartOption
  })
})
