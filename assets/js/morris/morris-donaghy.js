var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2007-08", "tweets": 14},
          {"month": "2007-09", "tweets": 0},
          {"month": "2007-10", "tweets": 1},
          {"month": "2007-11", "tweets": 0},
          {"month": "2007-12", "tweets": 0},
          {"month": "2008-01", "tweets": 3},
          {"month": "2008-02", "tweets": 0},
          {"month": "2008-03", "tweets": 1},
          {"month": "2008-04", "tweets": 2},
          {"month": "2008-05", "tweets": 8},
          {"month": "2008-06", "tweets": 37},
          {"month": "2008-07", "tweets": 52},
          {"month": "2008-08", "tweets": 5},
          {"month": "2008-09", "tweets": 11},
          {"month": "2008-10", "tweets": 10},
          {"month": "2008-11", "tweets": 3},
          {"month": "2008-12", "tweets": 0},
          {"month": "2009-01", "tweets": 3},
          {"month": "2009-02", "tweets": 4},
          {"month": "2009-03", "tweets": 5},
          {"month": "2009-04", "tweets": 13},
          {"month": "2009-05", "tweets": 51},
          {"month": "2009-06", "tweets": 234},
          {"month": "2009-07", "tweets": 15},
          {"month": "2009-08", "tweets": 124},
          {"month": "2009-09", "tweets": 24},
          {"month": "2009-10", "tweets": 363},
          {"month": "2009-11", "tweets": 195},
          {"month": "2009-12", "tweets": 804},
          {"month": "2010-01", "tweets": 88},
          {"month": "2010-02", "tweets": 47},
          {"month": "2010-03", "tweets": 80},
          {"month": "2010-04", "tweets": 96},
          {"month": "2010-05", "tweets": 532},
          {"month": "2010-06", "tweets": 517},
          {"month": "2010-07", "tweets": 21},
          {"month": "2010-08", "tweets": 52},
          {"month": "2010-09", "tweets": 26},
          {"month": "2010-10", "tweets": 65},
          {"month": "2010-11", "tweets": 34},
          {"month": "2010-12", "tweets": 43},
          {"month": "2011-01", "tweets": 69},
          {"month": "2011-02", "tweets": 107},
          {"month": "2011-03", "tweets": 164},
          {"month": "2011-04", "tweets": 276},
          {"month": "2011-05", "tweets": 469},
          {"month": "2011-06", "tweets": 419},
          {"month": "2011-07", "tweets": 89},
          {"month": "2011-08", "tweets": 53},
          {"month": "2011-09", "tweets": 58},
          {"month": "2011-10", "tweets": 63},
          {"month": "2011-11", "tweets": 63},
          {"month": "2011-12", "tweets": 159},
          {"month": "2012-01", "tweets": 172},
          {"month": "2012-02", "tweets": 181},
          {"month": "2012-03", "tweets": 427},
          {"month": "2012-04", "tweets": 242},
          {"month": "2012-05", "tweets": 830},
          {"month": "2012-06", "tweets": 1084},
          {"month": "2012-07", "tweets": 89},
          {"month": "2012-08", "tweets": 120},
          {"month": "2012-09", "tweets": 452},
          {"month": "2012-10", "tweets": 73},
          {"month": "2012-11", "tweets": 168},
          {"month": "2012-12", "tweets": 163},
          {"month": "2013-01", "tweets": 314},
          {"month": "2013-02", "tweets": 189},
          {"month": "2013-03", "tweets": 374},
          {"month": "2013-04", "tweets": 358},
          {"month": "2013-05", "tweets": 550},
          {"month": "2013-06", "tweets": 604},
          {"month": "2013-07", "tweets": 41},
          {"month": "2013-08", "tweets": 67},
          {"month": "2013-09", "tweets": 45},
          {"month": "2013-10", "tweets": 74},
          {"month": "2013-11", "tweets": 97},
          {"month": "2013-12", "tweets": 98},
          {"month": "2014-01", "tweets": 107},
          {"month": "2014-02", "tweets": 164},
          {"month": "2014-03", "tweets": 148},
          {"month": "2014-04", "tweets": 725},
          {"month": "2014-05", "tweets": 581},
          {"month": "2014-06", "tweets": 230},
          {"month": "2014-07", "tweets": 38},
          {"month": "2014-08", "tweets": 27},
          {"month": "2014-09", "tweets": 36},
          {"month": "2014-10", "tweets": 50},
          {"month": "2014-11", "tweets": 143},
          {"month": "2014-12", "tweets": 71},
          {"month": "2015-01", "tweets": 209},
          {"month": "2015-02", "tweets": 71},
          {"month": "2015-03", "tweets": 97},
          {"month": "2015-04", "tweets": 189},
          {"month": "2015-05", "tweets": 264},
          {"month": "2015-06", "tweets": 652},
          {"month": "2015-07", "tweets": 75},
          {"month": "2015-08", "tweets": 17},
          {"month": "2015-09", "tweets": 53},
          {"month": "2015-10", "tweets": 60},
          {"month": "2015-11", "tweets": 86},
          {"month": "2015-12", "tweets": 105},
          {"month": "2016-01", "tweets": 84},
          {"month": "2016-02", "tweets": 78},
          {"month": "2016-03", "tweets": 82},
          {"month": "2016-04", "tweets": 150},
          {"month": "2016-05", "tweets": 407},
          {"month": "2016-06", "tweets": 1}
        ],
        xkey: 'month',
        ykeys: ['tweets'],  //,'sentiment','sascore'
        labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      Morris.Line({
        element: 'sentiment-graph',
        data: [
          {"month": "2007-08", "anger": 0.0313, "disgust": 0.0, "fear": 0.0220, "joy": 0.0046, "sadness": 0.2755, "surprise": 0.0173},
          {"month": "2007-09", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2007-10", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2007-11", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2007-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2008-01", "anger": 0.0055, "disgust": 0.0, "fear": 0.3678, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2008-02", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2008-03", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.152, "surprise": 0.0},
          {"month": "2008-04", "anger": 0.1001, "disgust": 0.0, "fear": 0.0063, "joy": 0.1001, "sadness": 0.0, "surprise": 0.0},
          {"month": "2008-05", "anger": 0.0058, "disgust": 0.0, "fear": 0.0, "joy": 0.2503, "sadness": 0.0098, "surprise": 0.0},
          {"month": "2008-06", "anger": 0.0837, "disgust": 0.0, "fear": 0.0916, "joy": 0.0775, "sadness": 0.0294, "surprise": 0.0108},
          {"month": "2008-07", "anger": 0.0167, "disgust": 0.0, "fear": 0.0485, "joy": 0.0683, "sadness": 0.0087, "surprise": 0.0141},
          {"month": "2008-08", "anger": 0.0104, "disgust": 0.0, "fear": 0.0291, "joy": 0.0, "sadness": 0.0034, "surprise": 0.0291},
          {"month": "2008-09", "anger": 0.0045, "disgust": 0.0, "fear": 0.0134, "joy": 0.0197, "sadness": 0.0, "surprise": 0.1501},
          {"month": "2008-10", "anger": 0.0569, "disgust": 0.0, "fear": 0.0146, "joy": 0.038, "sadness": 0.0080, "surprise": 0.0411},
          {"month": "2008-11", "anger": 0.0365, "disgust": 0.0, "fear": 0.0124, "joy": 0.0, "sadness": 0.036, "surprise": 0.0450},
          {"month": "2008-12", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0},
          {"month": "2009-01", "anger": 0.1146, "disgust": 0.0, "fear": 0.0, "joy": 0.4043, "sadness": 0.0, "surprise": 0.0},
          {"month": "2009-02", "anger": 0.0066, "disgust": 0.0, "fear": 0.2091, "joy": 0.2201, "sadness": 0.0, "surprise": 0.0066},
          {"month": "2009-03", "anger": 0.0, "disgust": 0.0, "fear": 0.0148, "joy": 0.3624, "sadness": 0.0312, "surprise": 0.0148},
          {"month": "2009-04", "anger": 0.0405, "disgust": 0.0, "fear": 0.0620, "joy": 0.1011, "sadness": 0.0055, "surprise": 0.0298},
          {"month": "2009-05", "anger": 0.0281, "disgust": 0.0, "fear": 0.0712, "joy": 0.1176, "sadness": 0.0194, "surprise": 0.0171},
          {"month": "2009-06", "anger": 0.0287, "disgust": 0.0, "fear": 0.0334, "joy": 0.0622, "sadness": 0.0120, "surprise": 0.0429},
          {"month": "2009-07", "anger": 0.0636, "disgust": 0.0, "fear": 0.0047, "joy": 0.2231, "sadness": 0.1067, "surprise": 0.0070},
          {"month": "2009-08", "anger": 0.0108, "disgust": 0.0, "fear": 0.0095, "joy": 0.0195, "sadness": 0.0232, "surprise": 0.0186},
          {"month": "2009-09", "anger": 0.0147, "disgust": 0.0, "fear": 0.0915, "joy": 0.0077, "sadness": 5.7291, "surprise": 0.0073},
          {"month": "2009-10", "anger": 0.0879, "disgust": 0.0010, "fear": 0.0404, "joy": 0.0524, "sadness": 0.0135, "surprise": 0.0158},
          {"month": "2009-11", "anger": 0.0583, "disgust": 0.0030, "fear": 0.0476, "joy": 0.0454, "sadness": 0.0104, "surprise": 0.0430},
          {"month": "2009-12", "anger": 0.0256, "disgust": 0.0012, "fear": 0.0538, "joy": 0.0674, "sadness": 0.0272, "surprise": 0.0216},
          {"month": "2010-01", "anger": 0.0234, "disgust": 2.7272, "fear": 0.0839, "joy": 0.1037, "sadness": 0.0261, "surprise": 0.0082},
          {"month": "2010-02", "anger": 0.0330, "disgust": 2.1276, "fear": 0.0392, "joy": 0.2927, "sadness": 0.0360, "surprise": 7.0212},
          {"month": "2010-03", "anger": 0.0208, "disgust": 2.8125, "fear": 0.0822, "joy": 0.1531, "sadness": 0.0108, "surprise": 0.0344},
          {"month": "2010-04", "anger": 0.0307, "disgust": 0.0, "fear": 0.0624, "joy": 0.1440, "sadness": 0.0341, "surprise": 0.0064},
          {"month": "2010-05", "anger": 0.0282, "disgust": 0.0, "fear": 0.0575, "joy": 0.1603, "sadness": 0.0292, "surprise": 0.0207},
          {"month": "2010-06", "anger": 0.0183, "disgust": 5.1450, "fear": 0.0461, "joy": 0.1940, "sadness": 0.0219, "surprise": 0.0212},
          {"month": "2010-07", "anger": 0.0384, "disgust": 0.0, "fear": 0.0275, "joy": 0.0200, "sadness": 0.0186, "surprise": 0.0488},
          {"month": "2010-08", "anger": 0.0253, "disgust": 0.0, "fear": 0.0441, "joy": 0.1139, "sadness": 0.0087, "surprise": 0.0089},
          {"month": "2010-09", "anger": 0.0203, "disgust": 0.0, "fear": 0.0836, "joy": 0.0794, "sadness": 0.0069, "surprise": 0.0060},
          {"month": "2010-10", "anger": 0.025, "disgust": 2.7692, "fear": 0.0601, "joy": 0.1157, "sadness": 0.0544, "surprise": 0.0070},
          {"month": "2010-11", "anger": 0.0240, "disgust": 0.0, "fear": 0.0753, "joy": 0.0598, "sadness": 0.0372, "surprise": 0.0611},
          {"month": "2010-12", "anger": 0.039, "disgust": 6.9767, "fear": 0.0538, "joy": 0.1754, "sadness": 0.0122, "surprise": 0.0213},
          {"month": "2011-01", "anger": 0.0251, "disgust": 8.6956, "fear": 0.0488, "joy": 0.1137, "sadness": 0.0185, "surprise": 0.0160},
          {"month": "2011-02", "anger": 0.0434, "disgust": 0.0, "fear": 0.0422, "joy": 0.1280, "sadness": 0.0209, "surprise": 0.0246},
          {"month": "2011-03", "anger": 0.0229, "disgust": 0.0016, "fear": 0.0516, "joy": 0.1848, "sadness": 0.0185, "surprise": 0.0220},
          {"month": "2011-04", "anger": 0.0350, "disgust": 2.1739, "fear": 0.0418, "joy": 0.1632, "sadness": 0.0296, "surprise": 0.0114},
          {"month": "2011-05", "anger": 0.0203, "disgust": 0.0015, "fear": 0.0843, "joy": 0.1296, "sadness": 0.0154, "surprise": 0.0101},
          {"month": "2011-06", "anger": 0.0183, "disgust": 0.0011, "fear": 0.0745, "joy": 0.1549, "sadness": 0.0225, "surprise": 0.0181},
          {"month": "2011-07", "anger": 0.0235, "disgust": 0.0, "fear": 0.0447, "joy": 0.1504, "sadness": 0.0192, "surprise": 0.0192},
          {"month": "2011-08", "anger": 0.0341, "disgust": 0.0, "fear": 0.0779, "joy": 0.1449, "sadness": 0.0145, "surprise": 0.0491},
          {"month": "2011-09", "anger": 0.0478, "disgust": 0.0012, "fear": 0.0461, "joy": 0.1150, "sadness": 0.0028, "surprise": 0.0070},
          {"month": "2011-10", "anger": 0.0330, "disgust": 0.0, "fear": 0.0616, "joy": 0.1490, "sadness": 0.0166, "surprise": 0.0051},
          {"month": "2011-11", "anger": 0.0143, "disgust": 0.0, "fear": 0.0447, "joy": 0.1407, "sadness": 0.0151, "surprise": 0.0100},
          {"month": "2011-12", "anger": 0.0440, "disgust": 4.1928, "fear": 0.0837, "joy": 0.1646, "sadness": 0.0089, "surprise": 0.0069},
          {"month": "2012-01", "anger": 0.0220, "disgust": 0.0, "fear": 0.0391, "joy": 0.1871, "sadness": 0.0170, "surprise": 0.0085},
          {"month": "2012-02", "anger": 0.0205, "disgust": 0.0, "fear": 0.0681, "joy": 0.1451, "sadness": 0.0222, "surprise": 0.0120},
          {"month": "2012-03", "anger": 0.0209, "disgust": 6.9203, "fear": 0.0325, "joy": 0.2299, "sadness": 0.0148, "surprise": 0.0162},
          {"month": "2012-04", "anger": 0.0240, "disgust": 0.0011, "fear": 0.0765, "joy": 0.1742, "sadness": 0.0187, "surprise": 0.0228},
          {"month": "2012-05", "anger": 0.0232, "disgust": 0.0011, "fear": 0.0803, "joy": 0.1791, "sadness": 0.0175, "surprise": 0.0093},
          {"month": "2012-06", "anger": 0.0174, "disgust": 0.0010, "fear": 0.0691, "joy": 0.1287, "sadness": 0.0232, "surprise": 0.0132},
          {"month": "2012-07", "anger": 0.0239, "disgust": 0.0, "fear": 0.0597, "joy": 0.0554, "sadness": 0.0048, "surprise": 0.0090},
          {"month": "2012-08", "anger": 0.0199, "disgust": 1.5E-4, "fear": 0.0556, "joy": 0.1147, "sadness": 0.0210, "surprise": 0.0119},
          {"month": "2012-09", "anger": 0.0324, "disgust": 4.6144, "fear": 0.0360, "joy": 0.0857, "sadness": 0.0346, "surprise": 0.0189},
          {"month": "2012-10", "anger": 0.0349, "disgust": 0.0, "fear": 0.0773, "joy": 0.0818, "sadness": 0.0140, "surprise": 0.0064},
          {"month": "2012-11", "anger": 0.0273, "disgust": 0.0, "fear": 0.0453, "joy": 0.1936, "sadness": 0.0133, "surprise": 0.0097},
          {"month": "2012-12", "anger": 0.0135, "disgust": 0.0017, "fear": 0.0342, "joy": 0.1594, "sadness": 0.0165, "surprise": 0.0097},
          {"month": "2013-01", "anger": 0.0244, "disgust": 1.1751, "fear": 0.0535, "joy": 0.1470, "sadness": 0.0177, "surprise": 0.0167},
          {"month": "2013-02", "anger": 0.0174, "disgust": 0.0020, "fear": 0.0514, "joy": 0.1551, "sadness": 0.0160, "surprise": 0.0158},
          {"month": "2013-03", "anger": 0.0290, "disgust": 0.0, "fear": 0.0550, "joy": 0.1541, "sadness": 0.0267, "surprise": 0.0140},
          {"month": "2013-04", "anger": 0.0529, "disgust": 2.6908, "fear": 0.0402, "joy": 0.1509, "sadness": 0.0264, "surprise": 0.0110},
          {"month": "2013-05", "anger": 0.0188, "disgust": 8.1043, "fear": 0.0669, "joy": 0.1555, "sadness": 0.0157, "surprise": 0.0115},
          {"month": "2013-06", "anger": 0.0212, "disgust": 8.1777, "fear": 0.0650, "joy": 0.1939, "sadness": 0.0121, "surprise": 0.0153},
          {"month": "2013-07", "anger": 0.0272, "disgust": 0.0, "fear": 0.0923, "joy": 0.1768, "sadness": 0.0119, "surprise": 0.0202},
          {"month": "2013-08", "anger": 0.0264, "disgust": 2.1492, "fear": 0.0266, "joy": 0.1155, "sadness": 0.0297, "surprise": 0.0228},
          {"month": "2013-09", "anger": 0.0352, "disgust": 0.0, "fear": 0.0198, "joy": 0.1851, "sadness": 0.0293, "surprise": 0.0151},
          {"month": "2013-10", "anger": 0.0303, "disgust": 2.4324, "fear": 0.0264, "joy": 0.1059, "sadness": 0.0609, "surprise": 0.0130},
          {"month": "2013-11", "anger": 0.0622, "disgust": 2.4742, "fear": 0.0346, "joy": 0.0691, "sadness": 0.0278, "surprise": 0.0258},
          {"month": "2013-12", "anger": 0.0182, "disgust": 5.3571, "fear": 0.0477, "joy": 0.1396, "sadness": 0.0158, "surprise": 0.0336},
          {"month": "2014-01", "anger": 0.0285, "disgust": 3.5825, "fear": 0.0365, "joy": 0.1232, "sadness": 0.0094, "surprise": 0.0064},
          {"month": "2014-02", "anger": 0.0273, "disgust": 2.3414, "fear": 0.0504, "joy": 0.1637, "sadness": 0.0338, "surprise": 0.0131},
          {"month": "2014-03", "anger": 0.0374, "disgust": 1.6216, "fear": 0.0502, "joy": 0.1739, "sadness": 0.0196, "surprise": 0.0138},
          {"month": "2014-04", "anger": 0.0213, "disgust": 7.9655, "fear": 0.0590, "joy": 0.1075, "sadness": 0.0183, "surprise": 0.0138},
          {"month": "2014-05", "anger": 0.0173, "disgust": 6.3985, "fear": 0.0609, "joy": 0.1363, "sadness": 0.0191, "surprise": 0.0103},
          {"month": "2014-06", "anger": 0.0230, "disgust": 0.0, "fear": 0.0532, "joy": 0.1484, "sadness": 0.0154, "surprise": 0.0168},
          {"month": "2014-07", "anger": 0.0, "disgust": 0.0, "fear": 0.0927, "joy": 0.1262, "sadness": 0.0077, "surprise": 0.0055},
          {"month": "2014-08", "anger": 0.0361, "disgust": 0.0, "fear": 0.0659, "joy": 0.1323, "sadness": 0.0011, "surprise": 0.0133},
          {"month": "2014-09", "anger": 0.0301, "disgust": 0.0, "fear": 0.0709, "joy": 0.1123, "sadness": 0.0221, "surprise": 0.0070},
          {"month": "2014-10", "anger": 0.0324, "disgust": 2.0E-4, "fear": 0.0478, "joy": 0.1139, "sadness": 0.0065, "surprise": 0.0080},
          {"month": "2014-11", "anger": 0.0177, "disgust": 2.0979, "fear": 0.0441, "joy": 0.1095, "sadness": 0.0097, "surprise": 0.0607},
          {"month": "2014-12", "anger": 0.0179, "disgust": 2.5352, "fear": 0.0541, "joy": 0.2065, "sadness": 0.0211, "surprise": 0.0161},
          {"month": "2015-01", "anger": 0.0272, "disgust": 1.4354, "fear": 0.0407, "joy": 0.1558, "sadness": 0.0162, "surprise": 0.0106},
          {"month": "2015-02", "anger": 0.0211, "disgust": 0.0, "fear": 0.0409, "joy": 0.0762, "sadness": 0.0130, "surprise": 0.0205},
          {"month": "2015-03", "anger": 0.0262, "disgust": 2.3195, "fear": 0.0738, "joy": 0.1559, "sadness": 0.0180, "surprise": 0.0126},
          {"month": "2015-04", "anger": 0.0267, "disgust": 2.0317, "fear": 0.0228, "joy": 0.1855, "sadness": 0.0158, "surprise": 0.0068},
          {"month": "2015-05", "anger": 0.0183, "disgust": 0.0, "fear": 0.0570, "joy": 0.0970, "sadness": 0.0177, "surprise": 0.0052},
          {"month": "2015-06", "anger": 0.0207, "disgust": 2.3006, "fear": 0.0867, "joy": 0.0824, "sadness": 0.0175, "surprise": 0.0077},
          {"month": "2015-07", "anger": 0.0116, "disgust": 3.9999, "fear": 0.0352, "joy": 0.0954, "sadness": 0.0122, "surprise": 0.0096},
          {"month": "2015-08", "anger": 0.0455, "disgust": 0.0, "fear": 0.0, "joy": 0.0582, "sadness": 0.0, "surprise": 0.0},
          {"month": "2015-09", "anger": 0.0062, "disgust": 0.0038, "fear": 0.0381, "joy": 0.0552, "sadness": 0.0360, "surprise": 0.0028},
          {"month": "2015-10", "anger": 0.0737, "disgust": 5.0E-4, "fear": 0.0809, "joy": 0.1033, "sadness": 0.0231, "surprise": 0.0144},
          {"month": "2015-11", "anger": 0.0265, "disgust": 9.5771, "fear": 0.0764, "joy": 0.1586, "sadness": 0.0207, "surprise": 0.0246},
          {"month": "2015-12", "anger": 0.0048, "disgust": 0.0, "fear": 0.0999, "joy": 0.1135, "sadness": 0.0065, "surprise": 0.0208},
          {"month": "2016-01", "anger": 0.0295, "disgust": 2.1428, "fear": 0.0501, "joy": 0.1382, "sadness": 0.0162, "surprise": 6.3888},
          {"month": "2016-02", "anger": 0.0044, "disgust": 3.8461, "fear": 0.0279, "joy": 0.2231, "sadness": 0.0197, "surprise": 0.0266},
          {"month": "2016-03", "anger": 0.0224, "disgust": 0.0, "fear": 0.0623, "joy": 0.1067, "sadness": 0.0092, "surprise": 0.0114},
          {"month": "2016-04", "anger": 0.0255, "disgust": 0.0026, "fear": 0.0616, "joy": 0.1204, "sadness": 0.0192, "surprise": 0.0124},
          {"month": "2016-05", "anger": 0.0208, "disgust": 0.0020, "fear": 0.1114, "joy": 0.0803, "sadness": 0.0172, "surprise": 0.0205},
          {"month": "2016-06", "anger": 0.0, "disgust": 0.0, "fear": 0.0, "joy": 0.0, "sadness": 0.0, "surprise": 0.0}
        ],
        xkey: 'month',
        ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
        labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();
