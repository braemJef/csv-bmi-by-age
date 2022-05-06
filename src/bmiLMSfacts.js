/**
 * Source: Shypailo RJ (2020) Age-based Pediatric Growth Reference Charts.
 * Retrieved 5/6/2022 from the Baylor College of Medicine,
 * Children's Nutrition Research Center,
 * Body Composition Laboratory Web Site:
 * http://www.bcm.edu/bodycomplab/BMIapp/BMI-calculator-kids.html
 */

 var malL = new Array(
  -2.01118107, -1.982373595, -1.924100169, -1.86549793, -1.807261899,
  -1.750118905, -1.69481584, -1.642106779, -1.592744414, -1.547442391,
  -1.506902601, -1.471770047, -1.442628957, -1.419991255, -1.404277619,
  -1.39586317, -1.394935252, -1.401671596, -1.416100312, -1.438164899,
  -1.467669032, -1.504376347, -1.547942838, -1.597896397, -1.653732283,
  -1.714869347, -1.780673181, -1.850468473, -1.923551865, -1.999220429,
  -2.076707178, -2.155348017, -2.234438552, -2.313321723, -2.391381273,
  -2.468032491, -2.542781541, -2.61516595, -2.684789516, -2.751316949,
  -2.81445945, -2.87402476, -2.92984048, -2.981796828, -3.029831343,
  -3.073924224, -3.114093476, -3.15039004, -3.182893018, -3.21170511,
  -3.23694834, -3.25876011, -3.277281546, -3.292683774, -3.305124073,
  -3.314768951, -3.321785992, -3.326345795, -3.328602731, -3.328725277,
  -3.32687018, -3.323188896, -3.317827016, -3.310923871, -3.302612272,
  -3.293018361, -3.282260813, -3.270454609, -3.257703616, -3.244108214,
  -3.229761713, -3.214751287, -3.199158184, -3.18305795, -3.166520664,
  -3.1496103, -3.132389637, -3.114911153, -3.097226399, -3.079383079,
  -3.061423765, -3.043386071, -3.025310003, -3.007225737, -2.989164598,
  -2.971148225, -2.953208047, -2.935363951, -2.917635157, -2.900039803,
  -2.882593796, -2.865311266, -2.848204697, -2.831285052, -2.81456189,
  -2.79804347, -2.781736856, -2.765648008, -2.749782197, -2.734142443,
  -2.718732873, -2.703555506, -2.688611957, -2.673903164, -2.659429443,
  -2.645190534, -2.631185649, -2.617413511, -2.603872392, -2.590560148,
  -2.577474253, -2.564611831, -2.551969684, -2.539539972, -2.527325681,
  -2.515320235, -2.503519447, -2.491918934, -2.480514136, -2.469300331,
  -2.458272656, -2.447426113, -2.436755595, -2.426255887, -2.415921689,
  -2.405747619, -2.395728233, -2.385858029, -2.376131459, -2.366542942,
  -2.357086871, -2.347757625, -2.338549576, -2.3294571, -2.320474586,
  -2.311596446, -2.302817124, -2.294131107, -2.285532933, -2.277017201,
  -2.268578584, -2.260211837, -2.251911809, -2.243673453, -2.235491842,
  -2.227362173, -2.21927979, -2.211240187, -2.203239029, -2.195272161,
  -2.187335625, -2.179425674, -2.171538789, -2.163671689, -2.155821357,
  -2.147985046, -2.140160305, -2.132344989, -2.124537282, -2.116735712,
  -2.108939167, -2.10114692, -2.093358637, -2.085574403, -2.077794735,
  -2.070020599, -2.062253431, -2.054495145, -2.046748156, -2.039015385,
  -2.031300282, -2.023606828, -2.015942013, -2.008305745, -2.000706389,
  -1.993150137, -1.985643741, -1.97819451, -1.970810308, -1.96349954,
  -1.956271141, -1.949134561, -1.942099744, -1.935177101, -1.92837748,
  -1.921712136, -1.915192685, -1.908831065, -1.902639482, -1.896630358,
  -1.890816268, -1.885209876, -1.879823505, -1.874670324, -1.869760299,
  -1.865113245, -1.860734944, -1.85663384, -1.852827186, -1.849323204,
  -1.846131607, -1.843261294, -1.840720248, -1.83851544, -1.83665586,
  -1.835138046, -1.833972004, -1.833157751, -1.83269562, -1.832584342,
  -1.832820974, -1.833400825, -1.834317405, -1.83555752, -1.837119466,
  -1.838987063, -1.841146139, -1.843580575
);
var malM = new Array(
  16.57502768, 16.54777487, 16.49442763, 16.44259552, 16.3922434,
  16.34333654, 16.29584097, 16.24972371, 16.20495268, 16.16149871,
  16.11933258, 16.07842758, 16.03875896, 16.00030401, 15.96304277,
  15.92695418, 15.89202582, 15.85824093, 15.82558822, 15.79405728,
  15.76364255, 15.73433668, 15.70613566, 15.67904062, 15.65305192,
  15.62817269, 15.604408, 15.58176458, 15.56025067, 15.5398746,
  15.52064993, 15.50258427, 15.48568973, 15.46997718, 15.45545692,
  15.44213961, 15.43003207, 15.41914163, 15.40947356, 15.40103139,
  15.39381785, 15.38783094, 15.38306945, 15.37952958, 15.37720582,
  15.37609107, 15.37617677, 15.37745304, 15.37990886, 15.38353217,
  15.38831005, 15.39422883, 15.40127496, 15.40943252, 15.41868691,
  15.42902273, 15.44042439, 15.45287581, 15.46636218, 15.48086704,
  15.49637465, 15.51286936, 15.53033563, 15.54875807, 15.56812143,
  15.58841065, 15.60961101, 15.63170735, 15.65468563, 15.67853139,
  15.70323052, 15.72876911, 15.75513347, 15.78231007, 15.8102856,
  15.83904708, 15.86858123, 15.89887562, 15.92991765, 15.96169481,
  15.99419489, 16.02740607, 16.0613159, 16.09591292, 16.13118532,
  16.16712234, 16.20371168, 16.24094239, 16.27880346, 16.31728385,
  16.35637267, 16.39605916, 16.43633265, 16.47718256, 16.51859843,
  16.56056987, 16.60308661, 16.64613844, 16.68971518, 16.73380695,
  16.77840363, 16.82349538, 16.86907238, 16.91512487, 16.96164317,
  17.00861766, 17.05603879, 17.10389705, 17.15218302, 17.20088732,
  17.25000062, 17.29951367, 17.34941726, 17.39970308, 17.45036072,
  17.50138161, 17.55275674, 17.60447714, 17.6565339, 17.70891811,
  17.76162094, 17.81463359, 17.86794729, 17.92155332, 17.97544299,
  18.02960765, 18.08403868, 18.1387275, 18.19366555, 18.24884431,
  18.3042553, 18.35989003, 18.41574009, 18.47179706, 18.52805255,
  18.5844982, 18.64112567, 18.69792663, 18.75489278, 18.81201584,
  18.86928753, 18.92669959, 18.98424378, 19.04191185, 19.09969557,
  19.15758672, 19.21557707, 19.27365839, 19.33182247, 19.39006106,
  19.44836594, 19.50672885, 19.56514153, 19.62359571, 19.6820831,
  19.74059538, 19.7991242, 19.85766121, 19.916198, 19.97472615,
  20.03323719, 20.09172262, 20.15017387, 20.20858236, 20.26693944,
  20.32523642, 20.38346455, 20.44161501, 20.49967894, 20.5576474,
  20.6155114, 20.67326189, 20.73088905, 20.7883851, 20.84574003,
  20.90294449, 20.95998909, 21.01686433, 21.07356067, 21.1300685,
  21.18637813, 21.24247982, 21.29836376, 21.35402009, 21.40943891,
  21.46461026, 21.51952414, 21.57417053, 21.62853937, 21.68262062,
  21.73640419, 21.78988003, 21.84303819, 21.8958685, 21.94836168,
  22.00050569, 22.05229242, 22.10371305, 22.15475603, 22.20541249,
  22.255673, 22.30552831, 22.3549693, 22.40398706, 22.45257182,
  22.50071778, 22.54841437, 22.59565422, 22.64242956, 22.68873292,
  22.73455713, 22.7798953, 22.82474087, 22.86908912, 22.91293151,
  22.95626373, 22.99908062, 23.041377338
);
var malS = new Array(
  0.080592465, 0.080127429, 0.079233994, 0.078389356, 0.077593501,
  0.076846462, 0.076148308, 0.075499126, 0.074898994, 0.074347997,
  0.073846139, 0.07339337, 0.072989551, 0.072634432, 0.072327649,
  0.07206864, 0.071856805, 0.071691278, 0.071571093, 0.071495113,
  0.071462106, 0.071470646, 0.071519218, 0.071606277, 0.071730167,
  0.071889214, 0.072081737, 0.072306081, 0.072560637, 0.07284384,
  0.073154324, 0.073490667, 0.073851672, 0.074236235, 0.074643374,
  0.075072264, 0.075522104, 0.07599225, 0.076482128, 0.076991232,
  0.077519149, 0.07806539, 0.078629592, 0.079211369, 0.079810334,
  0.080426086, 0.081058206, 0.081706249, 0.082369741, 0.083048178,
  0.083741021, 0.0844477, 0.085167651, 0.085900184, 0.086644667,
  0.087400421, 0.088166744, 0.088942897, 0.089728202, 0.090521875,
  0.091323162, 0.092131305, 0.092945544, 0.093765118, 0.09458927,
  0.095417247, 0.096248301, 0.097081694, 0.097916698, 0.098752593,
  0.099588675, 0.100424251, 0.101258643, 0.102091189, 0.102921245,
  0.103748189, 0.104571386, 0.105390269, 0.106204258, 0.107012788,
  0.107815327, 0.108611374, 0.109400388, 0.110181915, 0.110955478,
  0.111720691, 0.112477059, 0.1132242, 0.113961734, 0.114689291,
  0.115406523, 0.116113097, 0.116808702, 0.117493042, 0.11816584,
  0.118826835, 0.119475785, 0.120112464, 0.120736656, 0.121348181,
  0.121946849, 0.122532501, 0.123104991, 0.123664186, 0.124209969,
  0.124742239, 0.125260905, 0.125765895, 0.126257147, 0.126734613,
  0.12719826, 0.127648067, 0.128084023, 0.128506192, 0.128914497,
  0.129309001, 0.129689741, 0.130056765, 0.130410133, 0.130749913,
  0.131076187, 0.131389042, 0.131688579, 0.131974905, 0.132248138,
  0.132508403, 0.132755834, 0.132990575, 0.133212776, 0.133422595,
  0.133620197, 0.133805756, 0.133979452, 0.13414147, 0.134292005,
  0.134431256, 0.134559427, 0.134676731, 0.134783385, 0.134879611,
  0.134965637, 0.135041695, 0.135108024, 0.135164867, 0.135212469,
  0.135251083, 0.135280963, 0.135302371, 0.135315568, 0.135320824,
  0.135318407, 0.135308594, 0.135291662, 0.135267891, 0.135237567,
  0.135200976, 0.135158409, 0.135110159, 0.135056522, 0.134997797,
  0.134934285, 0.134866291, 0.134794121, 0.134718085, 0.134638494,
  0.134555663, 0.13446991, 0.134381553, 0.134290916, 0.134198323,
  0.134104101, 0.134008581, 0.133912066, 0.133814954, 0.133717552,
  0.1336202, 0.133523244, 0.133427032, 0.133331914, 0.133238245,
  0.133146383, 0.13305669, 0.132969531, 0.132885274, 0.132804292,
  0.132726962, 0.132653664, 0.132584784, 0.132520711, 0.132461838,
  0.132408563, 0.132361289, 0.132320427, 0.132286382, 0.1322596,
  0.132240418, 0.13222933, 0.132226801, 0.132233201, 0.132248993,
  0.132274625, 0.132310549, 0.132357221, 0.132415103, 0.132484631,
  0.132566359, 0.132660699, 0.132768153, 0.132889211, 0.133024368,
  0.133174129, 0.133338999, 0.133519496, 0.133716192, 0.133929525,
  0.134160073, 0.134408381, 0.1346750014
);

var femL = new Array(
  -0.98660853, -1.024496827, -1.102698353, -1.18396635, -1.268071036,
  -1.354751525, -1.443689692, -1.53454192, -1.626928093, -1.720434829,
  -1.814635262, -1.909076262, -2.003296102, -2.096828937, -2.189211877,
  -2.279991982, -2.368732949, -2.455021314, -2.538471972, -2.618732901,
  -2.695488973, -2.768464816, -2.837426693, -2.902178205, -2.962580386,
  -3.018521987, -3.069936555, -3.116795864, -3.159107331, -3.196911083,
  -3.230276759, -3.259300182, -3.284099963, -3.30481415, -3.321596954,
  -3.334615646, -3.344047622, -3.35007771, -3.352893805, -3.352691376,
  -3.34966438, -3.343998803, -3.335889574, -3.325522491, -3.31307846,
  -3.298732648, -3.282653831, -3.265003896, -3.245937506, -3.225606516,
  -3.204146115, -3.181690237, -3.158363475, -3.134282833, -3.109557879,
  -3.084290931, -3.058577292, -3.032505499, -3.0061576, -2.979609448,
  -2.952930993, -2.926186592, -2.899435307, -2.872731211, -2.846123683,
  -2.819657704, -2.793374145, -2.767310047, -2.741498897, -2.715970894,
  -2.690753197, -2.665870146, -2.641343436, -2.617192204, -2.593430614,
  -2.570076037, -2.547141473, -2.524635245, -2.502569666, -2.48095189,
  -2.459785573, -2.439080117, -2.418838304, -2.399063683, -2.379756861,
  -2.360920527, -2.342557728, -2.324663326, -2.307240716, -2.290287663,
  -2.273803847, -2.257782149, -2.242227723, -2.227132805, -2.212495585,
  -2.19831275, -2.184580762, -2.171295888, -2.158454232, -2.146051754,
  -2.134084303, -2.122547629, -2.111437411, -2.100749266, -2.090478774,
  -2.080621484, -2.071172932, -2.062128649, -2.053484173, -2.045235058,
  -2.03737688, -2.029906684, -2.022817914, -2.016107084, -2.009769905,
  -2.003802134, -1.998199572, -1.992958064, -1.988073505, -1.983541835,
  -1.979359041, -1.975521156, -1.972024258, -1.968864465, -1.966037938,
  -1.963540872, -1.961369499, -1.959520079, -1.9579889, -1.956772271,
  -1.95586652, -1.955267984, -1.954973011, -1.954977947, -1.955279136,
  -1.955872909, -1.956755579, -1.957923436, -1.959372737, -1.9610997,
  -1.963100496, -1.96537124, -1.967907983, -1.970706706, -1.973763307,
  -1.977073595, -1.980633277, -1.984437954, -1.988483106, -1.992764085,
  -1.997276103, -2.002014224, -2.00697335, -2.012148213, -2.017533363,
  -2.023123159, -2.028911755, -2.034893091, -2.041060881, -2.047408604,
  -2.05392949, -2.060616513, -2.067462375, -2.074459502, -2.081600029,
  -2.088875793, -2.096278323, -2.103798828, -2.111428194, -2.119156972,
  -2.126975375, -2.134873266, -2.142840157, -2.150865204, -2.158937201,
  -2.167044578, -2.175176987, -2.183317362, -2.191457792, -2.199583649,
  -2.207681525, -2.215737645, -2.223739902, -2.231667995, -2.239511942,
  -2.247257081, -2.254885145, -2.26238209, -2.269731517, -2.276917229,
  -2.283925442, -2.290731442, -2.29732427, -2.303687802, -2.309799971,
  -2.315651874, -2.32121731, -2.326481911, -2.331428139, -2.336038473,
  -2.34029545, -2.344181703, -2.34768, -2.350773286, -2.353444725,
  -2.355677743, -2.35745607, -2.358763788, -2.359585369, -2.359905726,
  -2.359710258, -2.358980464, -2.357714508, -2.355892424, -2.353501353,
  -2.350528726, -2.346962247, -2.342796948
);
var femM = new Array(
  16.42339664, 16.38804056, 16.3189719, 16.25207985, 16.18734669,
  16.12475448, 16.06428762, 16.00593001, 15.94966631, 15.89548197,
  15.84336179, 15.79329146, 15.7452564, 15.69924188, 15.65523282,
  15.61321371, 15.57316843, 15.53508019, 15.49893145, 15.46470384,
  15.43237817, 15.40193436, 15.37335154, 15.34660842, 15.32168181,
  15.29854897, 15.27718618, 15.2575692, 15.23967338, 15.22347371,
  15.20894491, 15.19606152, 15.18479799, 15.17512871, 15.16702811,
  15.16047068, 15.15543107, 15.15188405, 15.14980479, 15.14916825,
  15.14994984, 15.15212585, 15.15567186, 15.16056419, 15.16677947,
  15.17429464, 15.18308694, 15.1931339, 15.20441335, 15.21690296,
  15.2305815, 15.24542745, 15.26141966, 15.27853728, 15.29675967,
  15.31606644, 15.33643745, 15.35785274, 15.38029261, 15.40373754,
  15.42816819, 15.45356545, 15.47991037, 15.50718419, 15.53536829,
  15.56444426, 15.5943938, 15.6251988, 15.65684126, 15.68930333,
  15.7225673, 15.75661555, 15.79143062, 15.82699517, 15.86329241,
  15.90030484, 15.93801545, 15.97640787, 16.01546483, 16.05516984,
  16.09550688, 16.13645881, 16.17800955, 16.22014281, 16.26284277,
  16.30609316, 16.34987759, 16.39418118, 16.43898741, 16.48428082,
  16.53004554, 16.57626713, 16.62292864, 16.67001572, 16.71751288,
  16.76540496, 16.81367689, 16.86231366, 16.91130036, 16.96062216,
  17.0102643, 17.06021213, 17.11045106, 17.16096656, 17.21174424,
  17.26276973, 17.31402878, 17.3655072, 17.4171909, 17.46906585,
  17.52111811, 17.57333347, 17.62569869, 17.67819987, 17.7308234,
  17.78355575, 17.83638347, 17.88929321, 17.94227168, 17.9953057,
  18.04838216, 18.10148804, 18.15461039, 18.20773639, 18.26085325,
  18.31394832, 18.36700902, 18.42002284, 18.47297739, 18.52586035,
  18.57865951, 18.63136275, 18.68395801, 18.73643338, 18.788777,
  18.84097713, 18.89302212, 18.94490041, 18.99660055, 19.04811118,
  19.09942105, 19.15051899, 19.20139397, 19.25203503, 19.30243131,
  19.35257209, 19.40244671, 19.45204465, 19.50135548, 19.55036888,
  19.59907464, 19.64746266, 19.69552294, 19.7432456, 19.79062086,
  19.83763907, 19.88429066, 19.9305662, 19.97645636, 20.02195192,
  20.06704377, 20.11172291, 20.15598047, 20.19980767, 20.24319586,
  20.28613648, 20.32862109, 20.37064138, 20.41218911, 20.45325617,
  20.49383457, 20.5339164, 20.57349387, 20.61255929, 20.65110506,
  20.6891237, 20.72660728, 20.76355011, 20.79994337, 20.83578051,
  20.87105449, 20.90575839, 20.93988477, 20.97342858, 21.00638171,
  21.0387374, 21.07048996, 21.10163241, 21.13215845, 21.16206171,
  21.1913351, 21.21997472, 21.24797262, 21.27532239, 21.30201933,
  21.32805489, 21.35342563, 21.37812462, 21.40214589, 21.42548351,
  21.44813156, 21.47008412, 21.49133529, 21.51187918, 21.53170989,
  21.55082155, 21.56920824, 21.58686406, 21.60378309, 21.61995939,
  21.635387, 21.65006126, 21.6639727, 21.67711736, 21.68948935,
  21.70108288, 21.71189225, 21.721909734
);
var femS = new Array(
  0.085451785, 0.085025838, 0.084214052, 0.083455124, 0.082748284,
  0.082092737, 0.081487717, 0.080932448, 0.080426175, 0.079968176,
  0.079557735, 0.079194187, 0.078876895, 0.078605255, 0.078378696,
  0.078196674, 0.078058667, 0.077964169, 0.077912684, 0.077903716,
  0.077936763, 0.078011309, 0.078126817, 0.078282739, 0.078478449,
  0.078713325, 0.078986694, 0.079297841, 0.079646006, 0.080030389,
  0.080450145, 0.080904391, 0.081392203, 0.081912623, 0.082464661,
  0.083047295, 0.083659478, 0.084300139, 0.0849682, 0.085662539,
  0.086382035, 0.087125591, 0.087892047, 0.088680264, 0.089489106,
  0.090317434, 0.091164117, 0.092028028, 0.092908048, 0.093803033,
  0.094711916, 0.095633595, 0.096566992, 0.097511046, 0.09846471,
  0.099426955, 0.100396769, 0.101373159, 0.10235515, 0.103341788,
  0.104332139, 0.105325289, 0.106320346, 0.10731644, 0.108312721,
  0.109308364, 0.110302563, 0.111294537, 0.112283526, 0.113268793,
  0.114249622, 0.115225321, 0.116195218, 0.117158667, 0.118115073,
  0.119063807, 0.12000429, 0.120935994, 0.121858355, 0.12277087,
  0.123673085, 0.124564484, 0.125444639, 0.126313121, 0.127169545,
  0.128013515, 0.128844639, 0.129662637, 0.130467138, 0.131257852,
  0.132034479, 0.132796819, 0.133544525, 0.134277436, 0.134995324,
  0.135697996, 0.136385276, 0.137057004, 0.137713039, 0.138353254,
  0.138977537, 0.139585795, 0.140177947, 0.140753927, 0.141313686,
  0.141857186, 0.142384404, 0.142895332, 0.143389972, 0.143868341,
  0.144330469, 0.144776372, 0.145206138, 0.145619819, 0.146017491,
  0.146399239, 0.146765161, 0.147115364, 0.147449967, 0.147769097,
  0.148072891, 0.148361495, 0.148635067, 0.148893769, 0.149137776,
  0.14936727, 0.149582439, 0.149783482, 0.149970604, 0.15014402,
  0.15030395, 0.150450621, 0.15058427, 0.150705138, 0.150813475,
  0.150909535, 0.150993582, 0.151065883, 0.151126714, 0.151176355,
  0.151215094, 0.151243223, 0.151261042, 0.151268855, 0.151266974,
  0.151255713, 0.151235395, 0.151206347, 0.151168902, 0.151123398,
  0.15107018, 0.151009595, 0.150942, 0.150867753, 0.150787221,
  0.150700774, 0.150608788, 0.150511645, 0.150409731, 0.15030344,
  0.150193169, 0.150079322, 0.149962308, 0.14984254, 0.149720441,
  0.149596434, 0.149470953, 0.149344433, 0.149217319, 0.14909006,
  0.14896311, 0.148836931, 0.148711989, 0.148588757, 0.148467715,
  0.148349348, 0.14823412, 0.148122614, 0.148015249, 0.147912564,
  0.147815078, 0.147723315, 0.147637768, 0.147559083, 0.147487716,
  0.14742421, 0.147369174, 0.147323144, 0.147286698, 0.147260415,
  0.147244828, 0.147240683, 0.147248467, 0.14726877, 0.147302299,
  0.147349514, 0.147411215, 0.147487979, 0.147580453, 0.147689289,
  0.14781515, 0.147958706, 0.148120633, 0.148301619, 0.148502355,
  0.148723546, 0.148965902, 0.149230142, 0.149516994, 0.149827195,
  0.150161492, 0.150520734, 0.150905439, 0.151316531, 0.151754808,
  0.152221086, 0.152716206, 0.1532408716
);

/***** male LMS *****/
export function mLMS(agenum) {
  var lmsArray = new Array(3) // an empty array of length 3
  // convert to months  
  agenum *= 12.0;
  var agernd = Math.round(agenum);
  // find the array index values above and below the age value 
  var lo = agernd - 24;
  var hi = agernd - 23;
  // calculate the weighing interval
  var intrvl = agenum - agernd + 0.5;
  // calculate the LMS factors
  lmsArray[0] = (intrvl * malL[hi]) + ((1 - intrvl) * malL[lo]);
  lmsArray[1] = (intrvl * malM[hi]) + ((1 - intrvl) * malM[lo]);
  lmsArray[2] = (intrvl * malS[hi]) + ((1 - intrvl) * malS[lo]);
  return lmsArray;
}

/***** female LMS *****/
export function fLMS(agenum) {
  var lmsArray = new Array(3) // an empty array of length 3
  // convert to months  
  agenum *= 12.0;
  var agernd = Math.round(agenum);
  // find the array index values above and below the age value 
  var lo = agernd - 24;
  var hi = agernd - 23;
  // calculate the weighing interval
  var intrvl = agenum - agernd + 0.5;
  // calculate the LMS factors
  lmsArray[0] = (intrvl * femL[hi]) + ((1 - intrvl) * femL[lo]);
  lmsArray[1] = (intrvl * femM[hi]) + ((1 - intrvl) * femM[lo]);
  lmsArray[2] = (intrvl * femS[hi]) + ((1 - intrvl) * femS[lo]);
  return lmsArray;
}