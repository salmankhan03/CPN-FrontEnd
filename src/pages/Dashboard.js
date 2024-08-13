import {
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  WindmillContext,
} from "@windmill/react-ui";
import LineChart from "components/chart/LineChart/LineChart";
import PieChart from "components/chart/Pie/PieChart";
import CardItem from "components/dashboard/CardItem";
import CardItemTwo from "components/dashboard/CardItemTwo";
import ChartCard from "components/chart/ChartCard";
import OrderTable from "components/order/OrderTable";
import TableLoading from "components/preloader/TableLoading";
import NotFound from "components/table/NotFound";
import PageTitle from "components/Typography/PageTitle";
import { SidebarContext } from "context/SidebarContext";
import * as dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import useAsync from "hooks/useAsync";
import useFilter from "hooks/useFilter";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiDelete, FiRefreshCw, FiShoppingCart, FiTruck } from "react-icons/fi";
import { ImCreditCard, ImStack } from "react-icons/im";
import OrderServices from "services/OrderServices";
import CustomUpdateModal from "components/modal/UpdateModal";
import EmailTemplateServices from "services/EmailTemplateServices";
//internal import

const Dashboard = () => {
  const { globalSetting } = useFilter();
  const { mode } = useContext(WindmillContext);

  dayjs.extend(isBetween);
  dayjs.extend(isToday);
  dayjs.extend(isYesterday);

  const { currentPage, handleChangePage, lang, limitData,  } = useContext(SidebarContext);

  // react hook
  const [todayOrderAmount, setTodayOrderAmount] = useState(0);
  const [yesterdayOrderAmount, setYesterdayOrderAmount] = useState(0);
  const [salesReport, setSalesReport] = useState([]);
  const [todayCashPayment, setTodayCashPayment] = useState(0);
  const [todayCardPayment, setTodayCardPayment] = useState(0);
  const [todayCreditPayment, setTodayCreditPayment] = useState(0);
  const [yesterdayCashPayment, setYesterdayCashPayment] = useState(0);
  const [yesterdayCardPayment, setYesterdayCardPayment] = useState(0);
  const [yesterdayCreditPayment, setYesterdayCreditPayment] = useState(0);
  const [orderTotalCounts, setOrderTotalCounts] = useState(0)
  const [statusCount, setStatusCount] = useState({
    Delivered: 0,
    Pending: 0,
    Confirmed:0,
    Processing: 0,
    Cancelled:0,
    Total:0
  });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [id, SetId] = useState()
  const [updatedStatus, SetUpdatedStatus] = useState()
  const [previousStatus,SetPreviousStatus]= useState()
  const [emailTemplateList, SetEmailTemplateList] = useState()
  const [customer, setCustomer] = useState()
  const [customerEmail, setCustomerEmail] = useState()
  const [dataTable, setDataTable] = useState([])

  const { data: bestSellerProductChart, loading: loadingBestSellerProduct } =
    useAsync(OrderServices.getBestSellerProductChart);

  const { data: dashboardRecentOrder, loading: loadingRecentOrder } = useAsync(
    () =>
      // OrderServices.getAllOrderList({ page: currentPage, limit: 3 })
      OrderServices.getAllOrders({
        customerName: "",
        status: 'Pending',
        page: currentPage,
        limit: 20,
        day: "",
        startDate: '',
        endDate: '',
      })
  );

  const { data: dashboardOrderCount, loading: loadingOrderCount } = useAsync(
    OrderServices.getDashboardCount
  );

  const { data: dashboardOrderAmount, loading: loadingOrderAmount } = useAsync(
    OrderServices.getDashboardAmount
  );

  const currency = globalSetting?.default_currency || "$";

  // console.log("dashboardOrderCount", dashboardOrderCount);

  // const { dataTable, serviceData } = useFilter(dashboardRecentOrder?.list?.data);

  const { t } = useTranslation();

  useEffect(() => {
    // today orders show
    const todayOrder = dashboardOrderAmount?.ordersData?.filter((order) =>
      dayjs(order.updatedAt).isToday()
    );
    //  console.log('todayOrder',dashboardOrderAmount.ordersData)
    const todayReport = todayOrder?.reduce((pre, acc) => pre + acc.total, 0);
    setTodayOrderAmount(todayReport);

    // yesterday orders
    const yesterdayOrder = dashboardOrderAmount?.ordersData?.filter((order) =>
      dayjs(order.updatedAt).set(-1, "day").isYesterday()
    );

    const yesterdayReport = yesterdayOrder?.reduce(
      (pre, acc) => pre + acc.total,
      0
    );
    setYesterdayOrderAmount(yesterdayReport);

    // sales orders chart data
    const salesOrderChartData = dashboardOrderAmount?.ordersData?.filter(
      (order) =>
        dayjs(order.updatedAt).isBetween(
          new Date().setDate(new Date().getDate() - 7),
          new Date()
        )
    );

    salesOrderChartData?.reduce((res, value) => {
      let onlyDate = value.updatedAt.split("T")[0];

      if (!res[onlyDate]) {
        res[onlyDate] = { date: onlyDate, total: 0, order: 0 };
        salesReport.push(res[onlyDate]);
      }
      res[onlyDate].total += value.total;
      res[onlyDate].order += 1;
      return res;
    }, {});

    setSalesReport(salesReport);

    const todayPaymentMethodData = [];
    const yesterDayPaymentMethodData = [];

    // today order payment method
    dashboardOrderAmount?.ordersData?.filter((item, value) => {
      if (dayjs(item.updatedAt).isToday()) {
        if (item.paymentMethod === "Cash") {
          let cashMethod = {
            paymentMethod: "Cash",
            total: item.total,
          };
          todayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Credit") {
          const cashMethod = {
            paymentMethod: "Credit",
            total: item.total,
          };

          todayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Card") {
          const cashMethod = {
            paymentMethod: "Card",
            total: item.total,
          };

          todayPaymentMethodData.push(cashMethod);
        }
      }

      return item;
    });
    // yesterday order payment method
    dashboardOrderAmount?.ordersData?.filter((item, value) => {
      if (dayjs(item.updatedAt).set(-1, "day").isYesterday()) {
        if (item.paymentMethod === "Cash") {
          let cashMethod = {
            paymentMethod: "Cash",
            total: item.total,
          };
          yesterDayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Credit") {
          const cashMethod = {
            paymentMethod: "Credit",
            total: item?.total,
          };

          yesterDayPaymentMethodData.push(cashMethod);
        }

        if (item.paymentMethod === "Card") {
          const cashMethod = {
            paymentMethod: "Card",
            total: item?.total,
          };

          yesterDayPaymentMethodData.push(cashMethod);
        }
      }

      return item;
    });

    const todayCsCdCit = Object.values(
      todayPaymentMethodData.reduce((r, { paymentMethod, total }) => {
        if (!r[paymentMethod]) {
          r[paymentMethod] = { paymentMethod, total: 0 };
        }
        r[paymentMethod].total += total;

        return r;
      }, {})
    );
    const today_cash_payment = todayCsCdCit.find(
      (el) => el.paymentMethod === "Cash"
    );
    setTodayCashPayment(today_cash_payment?.total);
    const today_card_payment = todayCsCdCit.find(
      (el) => el.paymentMethod === "Card"
    );
    setTodayCardPayment(today_card_payment?.total);
    const today_credit_payment = todayCsCdCit.find(
      (el) => el.paymentMethod === "Credit"
    );
    setTodayCreditPayment(today_credit_payment?.total);

    const yesterDayCsCdCit = Object.values(
      yesterDayPaymentMethodData.reduce((r, { paymentMethod, total }) => {
        if (!r[paymentMethod]) {
          r[paymentMethod] = { paymentMethod, total: 0 };
        }
        r[paymentMethod].total += total;

        return r;
      }, {})
    );
    const yesterday_cash_payment = yesterDayCsCdCit.find(
      (el) => el.paymentMethod === "Cash"
    );
    setYesterdayCashPayment(yesterday_cash_payment?.total);
    const yesterday_card_payment = yesterDayCsCdCit.find(
      (el) => el.paymentMethod === "Card"
    );
    setYesterdayCardPayment(yesterday_card_payment?.total);
    const yesterday_credit_payment = yesterDayCsCdCit.find(
      (el) => el.paymentMethod === "Credit"
    );
    setYesterdayCreditPayment(yesterday_credit_payment?.total);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardOrderAmount]);
  useEffect(()=>{
    setDataTable(dashboardRecentOrder?.list?.data)
  },[dashboardRecentOrder?.list?.data])
  useEffect(() => {
    getAllOrdersData()
    getAllTemplatesList()
  }, [])
  async function getAllOrdersData() {
    const res = await OrderServices.getAllOrders({
      customerName: "",
      status: null,
      page: 1,
      limit: 500,
      day: null,
      startDate: null,
      endDate: null,
    });
    setOrderTotalCounts(res?.list?.total)
    if (res?.list?.data?.length > 0) {

      const counts = {
        Delivered: 0,
        Pending: 0,
        Confirmed:0,
        Processing: 0,
        Cancelled:0
      };
      res?.list?.data.forEach(order => {
        if (order.status in counts) {
          counts[order.status]++;
        }
      });
      setStatusCount(counts);
    }
  }
  const getAllTemplatesList = async () => {
    let EmailTemplateListData = await EmailTemplateServices.getAllTemplates({
      page: currentPage,
      limit: limitData,
    })
    if (EmailTemplateListData?.status_code === 200)
      SetEmailTemplateList(EmailTemplateListData.list.data)

  }
  const updateStatus = (id, status) => {
    SetId(id)
    // console.log(id, data)
    const selectedOrder = dataTable.find(order => order?.id === id);
    SetPreviousStatus(selectedOrder?.status)
    setCustomer(selectedOrder?.billing_address?.first_name)
    setCustomerEmail(selectedOrder?.billing_address?.email)
    SetUpdatedStatus(status)
    setIsUpdateModalOpen(true);
  };
  const closeModalFunc = async () => {
    setIsUpdateModalOpen(false)
    const res = await   OrderServices.getAllOrders({
      customerName: "",
      status: 'Pending',
      page: currentPage,
      limit: 20,
      day: "",
      startDate: '',
      endDate: '',
    })
    // console.log(res)
    setDataTable(res?.list?.data)
  }
  return (
    <>
      <PageTitle>{t("DashboardOverview")}</PageTitle>
      {isUpdateModalOpen && (
        <CustomUpdateModal
          id={id}
          previous_order_status={previousStatus}
          status={updatedStatus}
          title={updatedStatus}
          handleConfirmUpdate={isUpdateModalOpen}
          closeModal={closeModalFunc}
          templatesList={emailTemplateList}
          customerName={customer}
          customerEmail={customerEmail}
        />
      )}


      <div className="grid gap-4 mb-8 md:grid-cols-4 xl:grid-cols-4">
        <CardItemTwo
          mode={mode}
          currency={currency}
          title="Today Order"
          title2="TodayOrder"
          Icon={ImStack}
          cash={todayCashPayment || 0}
          card={todayCardPayment || 0}
          credit={todayCreditPayment || 0}
          price={todayOrderAmount || 0}
          className="text-white dark:text-green-100 bg-teal-500"
          loading={loadingOrderAmount}
        />

        <CardItemTwo
          mode={mode}
          currency={currency}
          title="Yesterday Order"
          title2="YesterdayOrder"
          Icon={ImStack}
          cash={yesterdayCashPayment || 0}
          card={yesterdayCardPayment || 0}
          credit={yesterdayCreditPayment || 0}
          price={yesterdayOrderAmount || 0}
          className="text-white dark:text-orange-100 bg-orange-400"
          loading={loadingOrderAmount}
        />

        <CardItemTwo
          mode={mode}
          currency={currency}
          title2="ThisMonth"
          Icon={FiShoppingCart}
          price={dashboardOrderAmount?.thisMonthlyOrderAmount || 0}
          className="text-white dark:text-green-100 bg-blue-500"
          loading={loadingOrderAmount}
        />

        <CardItemTwo
          mode={mode}
          currency={currency}
          title2="AllTimeSales"
          Icon={ImCreditCard}
          price={dashboardOrderAmount?.totalAmount || 0}
          className="text-white dark:text-green-100 bg-green-500"
          loading={loadingOrderAmount}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <CardItem
          title="Total Order"
          Icon={FiShoppingCart}
          loading={loadingOrderCount}
          quantity={orderTotalCounts || 0}
          className="text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"
        />
        <CardItem
          title={t("OrderPending")}
          Icon={FiRefreshCw}
          loading={loadingOrderCount}
          quantity={statusCount?.Pending || 0}
          // amount={dashboardOrderCount?.totalPendingOrder?.total || 0}
          className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
        />
        <CardItem
          title={"Orders Confirmed"}
          Icon={FiCheck}
          loading={loadingOrderCount}
          quantity={statusCount?.Confirmed || 0}
          className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
        />
        <CardItem
          title={t("OrderDelivered")}
          Icon={FiTruck}
          loading={loadingOrderCount}
          quantity={statusCount?.Delivered || 0}
          className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
        />
         <CardItem
          title={"Orders Canceld"}
          Icon={FiDelete}
          loading={loadingOrderCount}
          quantity={statusCount?.Cancelled || 0}
          className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 my-8">
        <ChartCard
          mode={mode}
          loading={loadingOrderAmount}
          title={t("WeeklySales")}
        >
          <LineChart salesReport={salesReport} />
        </ChartCard>

        <ChartCard
          mode={mode}
          loading={loadingBestSellerProduct}
          title={t("BestSellingProducts")}
        >
          <PieChart data={bestSellerProductChart} />
        </ChartCard>
      </div>

      <PageTitle>{t("RecentOrder")}</PageTitle>

      {/* <Loading loading={loading} /> */}

      {loadingRecentOrder ? (
        <TableLoading row={5} col={4} />
      ) : 
      dataTable?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{t("InvoiceNo")}</TableCell>
                <TableCell>{t("TimeTbl")}</TableCell>
                <TableCell>{t("CustomerName")} </TableCell>
                {/* <TableCell> {t("MethodTbl")} </TableCell> */}
                <TableCell> {t("AmountTbl")} </TableCell>
                <TableCell>{t("OderStatusTbl")}</TableCell>
                <TableCell>{t("ActionTbl")}</TableCell>
                <TableCell className="text-right">{t("InvoiceTbl")}</TableCell>
              </tr>
            </TableHeader>

            <OrderTable
              lang={lang}
              orders={dataTable}
              globalSetting={globalSetting}
              currency={globalSetting?.default_currency || "$"}
              handleUpdateStatus={updateStatus}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={dashboardRecentOrder?.list?.total}
              resultsPerPage={dashboardRecentOrder?.list?.per_page}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no orders right now." />
      )}
    </>
  );
};

export default Dashboard;
