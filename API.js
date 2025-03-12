{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red246\green247\blue249;\red46\green49\blue51;
\red24\green25\blue27;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;\red77\green80\blue85;
}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c12549\c12941\c14118;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;\cssrgb\c37255\c38824\c40784;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 importCognitoFormsData\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 sheet\cf4 \strokec4  = \cf6 \strokec6 SpreadsheetApp\cf4 \strokec4 .\cf5 \strokec5 getActiveSpreadsheet\cf4 \strokec4 ().\cf5 \strokec5 getSheetByName\cf4 \strokec4 (\cf7 \strokec7 "Hoja 1"\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 sheet\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "Error: La hoja 'Hoja 1' no existe."\cf4 \strokec4 );\cb1 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 formID\cf4 \strokec4  = \cf7 \strokec7 "6"\cf4 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 apiKey\cf4 \strokec4  = \cf7 \strokec7 "eyJhbGciOiJIUzI1NiIsImtpZCI6Ijg4YmYzNWNmLWM3ODEtNDQ3ZC1hYzc5LWMyODczMjNkNzg3ZCIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjA0ZTk3Y2JkLTgxM2UtNGEwMS05ZGVkLTVmNzNjYmRiMGNhNSIsImludGVncmF0aW9uSWQiOiI1MTQ1M2IyZC1iYjAzLTQ0NGEtODI3OS1lYTZjZmYxY2JhNDgiLCJjbGllbnRJZCI6IjNkZTNmODMwLWNiYzctNDZlNi1iOTZlLTVmMDE2NzcyMTgzMCIsImp0aSI6IjU4NWQ4ZTVmLWJlZmItNGYwMC04NGMwLTU1M2YwMzg3ZjIzYyIsImlhdCI6MTc0MTA0MjcyMCwiaXNzIjoiaHR0cHM6Ly93d3cuY29nbml0b2Zvcm1zLmNvbS8iLCJhdWQiOiJhcGkifQ.o4YVBup47dvslXp5LzM640doga3kEKn_j1YNqvX8yb0"\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 options\cf4 \strokec4  = \{\cb1 \
\cb3         \cf7 \strokec7 "method"\cf4 \strokec4 : \cf7 \strokec7 "GET"\cf4 \strokec4 ,\cb1 \
\cb3         \cf7 \strokec7 "headers"\cf4 \strokec4 : \{\cb1 \
\cb3             \cf7 \strokec7 "Authorization"\cf4 \strokec4 : \cf7 \strokec7 "Bearer "\cf4 \strokec4  + \cf5 \strokec5 apiKey\cf4 \strokec4 ,\cb1 \
\cb3             \cf7 \strokec7 "Content-Type"\cf4 \strokec4 : \cf7 \strokec7 "application/json"\cf4 \cb1 \strokec4 \
\cb3         \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 allData\cf4 \strokec4  = [];\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 startID\cf4 \strokec4  = \cf8 \strokec8 2\cf4 \strokec4 ;  \cf9 \strokec9 // Comienza en la entrada 2\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 endID\cf4 \strokec4  = \cf8 \strokec8 10\cf4 \strokec4 ; \cf9 \strokec9 // L\'edmite hasta la entrada 10\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 foundEntries\cf4 \strokec4  = \cf8 \strokec8 0\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 entryID\cf4 \strokec4  = \cf5 \strokec5 startID\cf4 \strokec4 ; \cf5 \strokec5 entryID\cf4 \strokec4  <= \cf5 \strokec5 endID\cf4 \strokec4 ; \cf5 \strokec5 entryID\cf4 \strokec4 ++) \{\cb1 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 url\cf4 \strokec4  = \cf7 \strokec7 "https://www.cognitoforms.com/api/forms/"\cf4 \strokec4  + \cf5 \strokec5 formID\cf4 \strokec4  + \cf7 \strokec7 "/entries/"\cf4 \strokec4  + \cf5 \strokec5 entryID\cf4 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 try\cf4 \strokec4  \{\cb1 \
\cb3             \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "\uc0\u55357 \u56549  Intentando obtener entrada ID: "\cf4 \strokec4  + \cf5 \strokec5 entryID\cf4 \strokec4 );\cb1 \
\cb3             \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 response\cf4 \strokec4  = \cf6 \strokec6 UrlFetchApp\cf4 \strokec4 .\cf5 \strokec5 fetch\cf4 \strokec4 (\cf5 \strokec5 url\cf4 \strokec4 , \cf5 \strokec5 options\cf4 \strokec4 );\cb1 \
\cb3             \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 content\cf4 \strokec4  = \cf5 \strokec5 response\cf4 \strokec4 .\cf5 \strokec5 getContentText\cf4 \strokec4 ();\cb1 \
\cb3             \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 json\cf4 \strokec4  = \cf6 \strokec6 JSON\cf4 \strokec4 .\cf5 \strokec5 parse\cf4 \strokec4 (\cf5 \strokec5 content\cf4 \strokec4 );\cb1 \
\
\cb3             \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 json\cf4 \strokec4 ) \{\cb1 \
\cb3                 \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 rowData\cf4 \strokec4  = \cf5 \strokec5 flattenCognitoData\cf4 \strokec4 (\cf5 \strokec5 json\cf4 \strokec4 );\cb1 \
\cb3                 \cf5 \strokec5 allData\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 (\cf5 \strokec5 rowData\cf4 \strokec4 );\cb1 \
\cb3                 \cf5 \strokec5 foundEntries\cf4 \strokec4 ++;\cb1 \
\cb3             \}\cb1 \
\
\cb3         \} \cf2 \strokec2 catch\cf4 \strokec4  (\cf5 \strokec5 error\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 error\cf4 \strokec4 .\cf5 \strokec5 message\cf4 \strokec4 .\cf5 \strokec5 includes\cf4 \strokec4 (\cf7 \strokec7 "404"\cf4 \strokec4 )) \{\cb1 \
\cb3                 \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "\uc0\u55357 \u57003  Entrada "\cf4 \strokec4  + \cf5 \strokec5 entryID\cf4 \strokec4  + \cf7 \strokec7 " no encontrada, continuando..."\cf4 \strokec4 );\cb1 \
\cb3             \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3                 \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "\uc0\u10060  Error al obtener la entrada "\cf4 \strokec4  + \cf5 \strokec5 entryID\cf4 \strokec4  + \cf7 \strokec7 ": "\cf4 \strokec4  + \cf5 \strokec5 error\cf4 \strokec4 .\cf5 \strokec5 message\cf4 \strokec4 );\cb1 \
\cb3             \}\cb1 \
\cb3         \}\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 foundEntries\cf4 \strokec4  === \cf8 \strokec8 0\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "\uc0\u55357 \u57003  No se encontraron registros v\'e1lidos."\cf4 \strokec4 );\cb1 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf9 \strokec9 // Obtener encabezados actuales o crearlos si es la primera ejecuci\'f3n\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 headers\cf4 \strokec4  = \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getLastColumn\cf4 \strokec4 () > \cf8 \strokec8 0\cf4 \strokec4  ? \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf8 \strokec8 1\cf4 \strokec4 , \cf8 \strokec8 1\cf4 \strokec4 , \cf8 \strokec8 1\cf4 \strokec4 , \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getLastColumn\cf4 \strokec4 ()).\cf5 \strokec5 getValues\cf4 \strokec4 ()[\cf8 \strokec8 0\cf4 \strokec4 ] : [];\cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  === \cf8 \strokec8 0\cf4 \strokec4  || \cf5 \strokec5 headers\cf4 \strokec4 [\cf8 \strokec8 0\cf4 \strokec4 ] === \cf7 \strokec7 ""\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 newHeaders\cf4 \strokec4  = \cf6 \strokec6 Object\cf4 \strokec4 .\cf5 \strokec5 keys\cf4 \strokec4 (\cf5 \strokec5 allData\cf4 \strokec4 [\cf8 \strokec8 0\cf4 \strokec4 ]);\cb1 \
\cb3         \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 appendRow\cf4 \strokec4 (\cf5 \strokec5 newHeaders\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 headers\cf4 \strokec4  = \cf5 \strokec5 newHeaders\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 rows\cf4 \strokec4  = \cf5 \strokec5 allData\cf4 \strokec4 .\cf5 \strokec5 map\cf4 \strokec4 (\cf5 \strokec5 rowData\cf4 \strokec4  => \cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 map\cf4 \strokec4 (\cf5 \strokec5 header\cf4 \strokec4  => \cf5 \strokec5 rowData\cf4 \strokec4 [\cf5 \strokec5 header\cf4 \strokec4 ] || \cf7 \strokec7 ""\cf4 \strokec4 ));\cb1 \
\cb3     \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getLastRow\cf4 \strokec4 () + \cf8 \strokec8 1\cf4 \strokec4 , \cf8 \strokec8 1\cf4 \strokec4 , \cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 , \cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ).\cf5 \strokec5 setValues\cf4 \strokec4 (\cf5 \strokec5 rows\cf4 \strokec4 );\cb1 \
\
\cb3     \cf6 \strokec6 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf7 \strokec7 "\uc0\u9989  "\cf4 \strokec4  + \cf5 \strokec5 foundEntries\cf4 \strokec4  + \cf7 \strokec7 " entradas agregadas correctamente a Sheets."\cf4 \strokec4 );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 \strokec9 // Funci\'f3n para aplanar JSON anidado en formato de tabla\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 flattenCognitoData\cf4 \strokec4 (\cf5 \strokec5 sourceObj\cf4 \strokec4 , \cf5 \strokec5 prefix\cf4 \strokec4  = \cf7 \strokec7 ""\cf4 \strokec4 , \cf5 \strokec5 result\cf4 \strokec4  = \{\}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 key\cf4 \strokec4  \cf2 \strokec2 in\cf4 \strokec4  \cf5 \strokec5 sourceObj\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 sourceObj\cf4 \strokec4 .\cf5 \strokec5 hasOwnProperty\cf4 \strokec4 (\cf5 \strokec5 key\cf4 \strokec4 )) \cf2 \strokec2 continue\cf4 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 value\cf4 \strokec4  = \cf5 \strokec5 sourceObj\cf4 \strokec4 [\cf5 \strokec5 key\cf4 \strokec4 ];\cb1 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 newPrefix\cf4 \strokec4  = \cf5 \strokec5 prefix\cf4 \strokec4  ? \cf5 \strokec5 prefix\cf4 \strokec4  + \cf7 \strokec7 "_"\cf4 \strokec4  + \cf5 \strokec5 key\cf4 \strokec4  : \cf5 \strokec5 key\cf4 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 if\cf4 \strokec4  (\cf2 \strokec2 typeof\cf4 \strokec4  \cf5 \strokec5 value\cf4 \strokec4  === \cf7 \strokec7 "object"\cf4 \strokec4  && \cf5 \strokec5 value\cf4 \strokec4  !== \cf2 \strokec2 null\cf4 \strokec4  && !\cf6 \strokec6 Array\cf4 \strokec4 .\cf5 \strokec5 isArray\cf4 \strokec4 (\cf5 \strokec5 value\cf4 \strokec4 )) \{\cb1 \
\cb3             \cf5 \strokec5 flattenCognitoData\cf4 \strokec4 (\cf5 \strokec5 value\cf4 \strokec4 , \cf5 \strokec5 newPrefix\cf4 \strokec4 , \cf5 \strokec5 result\cf4 \strokec4 );\cb1 \
\cb3         \} \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  (\cf6 \strokec6 Array\cf4 \strokec4 .\cf5 \strokec5 isArray\cf4 \strokec4 (\cf5 \strokec5 value\cf4 \strokec4 )) \{\cb1 \
\cb3             \cf5 \strokec5 result\cf4 \strokec4 [\cf5 \strokec5 newPrefix\cf4 \strokec4 ] = \cf5 \strokec5 value\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  > \cf8 \strokec8 0\cf4 \strokec4  ? \cf6 \strokec6 JSON\cf4 \strokec4 .\cf5 \strokec5 stringify\cf4 \strokec4 (\cf5 \strokec5 value\cf4 \strokec4 ) : \cf7 \strokec7 ""\cf4 \strokec4 ;\cb1 \
\cb3         \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3             \cf5 \strokec5 result\cf4 \strokec4 [\cf5 \strokec5 newPrefix\cf4 \strokec4 ] = \cf5 \strokec5 value\cf4 \strokec4  || \cf7 \strokec7 ""\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3     \}\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 result\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
}