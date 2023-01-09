import {
  FlexDirYDiv,
  FullDiv,
  InlineLine,
  Li,
  Nav,
  NavItem,
  Span,
} from "../../Components/Common";

const Report = () => {
  return (
    <div className="fullheight">
      <Nav>
        <NavItem>
          <h1>Reports</h1>
        </NavItem>
      </Nav>
      <FullDiv>
        <FlexDirYDiv>
          <div className="flex-wrap">
            <div className=" p-0 m-0 w-48">
              <div className="m-1">
                <Span>Accounting</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li>Journal Report</Li>
                  <Li>Trial Balance</Li>
                  <Li>Profit and Loss</Li>
                  <Li>Balance Sheet</Li>
                  <Li>General Ledger</Li>
                  <Li>General Expense</Li>
                  <Li>TDS Payable Report</Li>
                  <Li>TCS Payable Report</Li>
                </ul>
              </div>
            </div>
            <div className="p-0 m-0 w-48">
              <div className="m-1">
                <Span>Sales</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li> Outstanding Receivables</Li>
                  <Li>Outstanding Invoice Summary</Li>
                  <Li>Customer Ledger Summary</Li>
                  <Li>Income by Customer</Li>
                  <Li>Sales By Broker</Li>
                  <Li>Sales Invoice Summary</Li>
                </ul>
              </div>
            </div>
            <div className="p-0 m-0 w-48">
              <div className="m-1">
                <Span>Inventory</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li>Inventory Items Summary</Li>
                  <Li>Inventory Transactions</Li>
                  <Li>Sales By Product Details</Li>
                  <Li>Sales By Items</Li>
                  <Li>Product Stock by warehouse</Li>
                </ul>
              </div>
            </div>

            <div className="p-0 m-0 w-48">
              <div className="m-1">
                <Span>GST</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li>GST R1</Li>
                  <Li>GST R2</Li>
                  <Li>GST R2 - Verification</Li>
                  <Li>GSTR 3B</Li>
                  <Li>Purchase Report</Li>
                </ul>
              </div>
            </div>
            <div className="p-0 m-0 w-48">
              <div className="m-1">
                <Span>Financial</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li>Cash & Bank Summary</Li>
                </ul>
              </div>
            </div>
            <div className="p-0 m-0 w-48">
              <div className="m-1">
                <Span>Purchases</Span>
                <InlineLine />
              </div>
              <div>
                <ul>
                  <Li>Outstanding Payables</Li>
                  <Li>Payable Invoice Summary</Li>
                  <Li>Supplier Ledger Summary</Li>
                  <Li>Outcome by Supplier</Li>
                  <Li>Purchase Invoice Summary</Li>
                </ul>
              </div>
            </div>
          </div>
        </FlexDirYDiv>
      </FullDiv>
    </div>
  );
};

export default Report;
