import { IgrPieChart, IgrPieChartModule } from 'igniteui-react-charts';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import styles from './view2.module.css';
import createClassTransformer from '../style-utils';

IgrPieChartModule.register();

export default function View2() {
  const classes = createClassTransformer(styles);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout view-2-container")}>
        <div className={classes("group")}>
          <IgrPieChart dataSource={financialBoxOfficeRevenue} labelMemberPath="Franchise" valueMemberPath="TotalWorldBoxOfficeRevenue"></IgrPieChart>
        </div>
      </div>
    </>
  );
}
