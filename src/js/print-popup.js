document.getElementById("print-button").addEventListener("click", () => {
  // Prepare options for printing
  const options = {
    silent: false,
    printBackground: document.getElementById("print-background").checked,
    color: false,
    margin: {
      marginType: "printableArea",
    },
    landscape: document.getElementById("landscape").checked,
    pagesPerSheet: 1,
    collate: false,
    copies: parseInt(document.getElementById("copies").value, 10),
  };

  // Ensure footer only appears on the last page
  const footer = document.querySelector(".footer");
  footer.style.display = "none"; // Hide initially

  window.onbeforeprint = () => {
    footer.style.display = "block"; // Show during print
  };

  window.onafterprint = () => {
    footer.style.display = "none"; // Hide after print
  };

  // Trigger print
  window.print(options);

  window.electron.onPrintResponse((event, response) => {
    if (response.success) {
      console.log("Print successful");
      window.close(); // Close the popup
    } else {
      console.error("Print request failed:", response.reason);
    }
  });
});

// Handle Cancel button click
document.getElementById("cancel-button").addEventListener("click", () => {
  window.close();
});

// Load table content dynamically
window.electron.on("load-table", (event, tableHtml) => {
  if (!tableHtml) {
    console.error("Received tableHtml is undefined");
  } else {
    document.getElementById("printable-content").innerHTML = tableHtml;
  }
});
