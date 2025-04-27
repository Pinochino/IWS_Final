import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "~/components/Header";
import { tokens } from "~/theme";

// ICONs
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatBox from "~/components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonIcon from "@mui/icons-material/Person";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import LineChart from "~/components/LineChart";
import { mockTransactions } from "~/data/mockData";
import ProgressCircle from "~/components/ProgressCircle";
import GeographyChart from "~/components/Geography";
import BarChart from "~/components/BarChart";
import { useSelector } from "react-redux";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {user} = useSelector((state) => state.user);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon>Download Report</DownloadOutlinedIcon>
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTs */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,361"
            subtitle="Sales Obtained"
            progress="0.75"
            increase="+14%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="New Clients"
            progress="0.75"
            increase="+14%"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Traffic Inbound"
            progress="0.75"
            increase="+14%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* BOX ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.greenAccent[100]}
              >
                $59,423,412
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="100px" ml="-20px">
            <LineChart isLDashboard={true} height="35vh" />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}` - `${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography
                  color={colors.grey[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.grey[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.date}
              </Box>
            </Box>
          ))}
        </Box>

        {/* BOX ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"

        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px", mb: '10px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>
              Includes extra misc fiewi
            </Typography>
          </Box>
          </Box>
          
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography
              variant="h5"
              fontWeight="600"
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isLDashboard={true} height={'35vh'} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" mb="15px">
              Geographic Based Traffic
            </Typography>
            <Box height="250px">
              <GeographyChart isLDashboard={true} height="30vh" />
            </Box>
          </Box>
        </Box>
      </Box>
    
  );
}

export default Dashboard;
