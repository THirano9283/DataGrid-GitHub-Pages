import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrRowDataEventArgs } from 'igniteui-react-grids';
import { deleteProduct, postProduct, putProduct } from '../services/sample-app1-server';
import { useGetProductList } from '../hooks/sample-app1-server-hooks';
import 'igniteui-react-grids/grids';
import styles from './view1.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrGridModule.register();

export default function View1() {
  const classes = createClassTransformer(styles);
  const { requestSampleApp1ServerProduct, sampleApp1ServerProduct } = useGetProductList();

  function productsRowAdded(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    postProduct(args.detail.data).then((res) => {
      if (res) {
        requestSampleApp1ServerProduct();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function productsRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putProduct(args.detail.rowData).then((res) => {
        if (res) {
          requestSampleApp1ServerProduct();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  function productsRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteProduct(args.detail.primaryKey).then((res) => {
      if (res) {
        requestSampleApp1ServerProduct();
      } else {
        // TODO: handle error here!
      }
    });
  }

  return (
    <>
      <div className={classes("row-layout view-1-container")}>
        <IgrGrid data={sampleApp1ServerProduct} primaryKey="id" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" rowAdded={productsRowAdded} rowEditDone={productsRowEditDone} rowDeleted={productsRowDeleted} className={classes("ig-typography ig-scrollbar grid")}>
          <IgrColumn field="id" dataType="string" header="id" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="productCode" dataType="string" header="productCode" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="productName" dataType="string" header="productName" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="description" dataType="string" header="description" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="recommendations" dataType="string" header="recommendations" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="salesStartDate" dataType="date" header="salesStartDate" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="salesEndDate" dataType="date" header="salesEndDate" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable="true" selectable="false"></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
      </div>
    </>
  );
}
