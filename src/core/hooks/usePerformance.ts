import { ChartProps } from '../../app/components/Chart/Chart';
import { useCallback, useState } from "react";
import { MetricService } from 'vitorpmaringolo-sdk';
import transformEditorMonthlyEarningsIntoChartJs from '../utils/transformEditorMonthlyEarningsIntoChartJs';

export default function usePerformance() {
    const [performance, setPerformance] = useState<ChartProps["data"]>();

    const fetchPerformance = useCallback(() => {
        MetricService.getEditorMonthlyEarnings()
            .then(transformEditorMonthlyEarningsIntoChartJs)
            .then(setPerformance);
    }, []);

    return {performance, fetchPerformance};
}