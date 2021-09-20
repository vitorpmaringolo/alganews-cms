import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { MetricService } from "vitorpmaringolo-sdk"
import withBoundary from "../../core/hoc/withBoundary"
import transformEditorMonthlyEarningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs"
import Chart, { ChartProps } from "../components/Chart/Chart"

function UserPerformance() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  if (error)
    throw error

  if (!editorEarnings)
    return <div>
      <Skeleton height={227}/>
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default withBoundary(UserPerformance, 'Performance')