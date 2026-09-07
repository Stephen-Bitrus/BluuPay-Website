# African startup opportunities (Airtable export)

Excel export of the public Airtable grid
[155+ March Opportunities Built for African Startups](https://airtable.com/appcim1kbCvNaNrae/shrY0E6dt9elq5j5k/tblYUkt345u2u7giJ/viwSUqTO4Uvmg8cFl)
(table **August ED**).

## Spreadsheet

Open [`155_March_Opportunities_African_Startups.xlsx`](155_March_Opportunities_African_Startups.xlsx).

| Sheet | Contents |
| --- | --- |
| **August ED** | All 88 rows and 12 visible columns from the shared view |
| **Summary** | Counts by Status and Deadline |
| **Source** | Share URL and export metadata |

Columns: Program Name, Organizing Entity, Target: Country/Region, Target: Sector, Target: Stage, Target: Who, Benefit: Funding, Benefit: Additional, Brief Description, Application Link, Deadline, Status.

Application links that are full URLs are clickable. Status cells are highlighted (Open / Closed).

The share title says “155+”; this specific view currently contains **88 records** (79 Open, 9 Closed).

## Refresh the export

```bash
python3 -m pip install -r requirements.txt
python3 export_airtable.py
```

That overwrites the `.xlsx` from the live shared view.
