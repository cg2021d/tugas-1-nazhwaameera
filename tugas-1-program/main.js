function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const object_nasi_kiri = {
        object_color1: [0.920, 0.920, 0.920], //shade 1
        object_color2: [0.880, 0.880, 0.880], //shade 2
        object_color3: [0.850, 0.850, 0.850], //shade 3
        object_color4: [0.820, 0.820, 0.820], //shade 4

        //shade 4
        body_1: [-0.85052, -0.06878], //L
        body_2: [-0.8, -0.08], //B
        body_3: [-0.84086, -0.07552], //G

        body_4: [-0.84086, -0.07552], //G
        body_5: [-0.8, -0.08], //B
        body_6: [-0.83034, -0.08604], //F

        body_7: [-0.83034, -0.08604], //F
        body_8: [-0.8, -0.08], //B
        body_9: [-0.81838, -0.09034], //E

        body_10: [-0.81838, -0.09034], //E
        body_11: [-0.8, -0.08], //B
        body_12: [-0.80069, -0.0913], //A

        body_13: [-0.80069, -0.0913], //A
        body_14: [-0.8, -0.08], //B
        body_15: [-0.8873, -0.09082], //H

        body_16: [-0.7873, -0.09082], //H
        body_17: [-0.8, -0.08], //B
        body_18: [-0.76817, -0.08651], //I

        body_19: [-0.76817, -0.08651], //I
        body_20: [-0.8, -0.08], //B
        body_21: [-0.75143, -0.07982], //J

        body_22: [-0.75143, -0.07982], //J
        body_23: [-0.8, -0.08], //B
        body_24: [-0.73804, -0.07217], //K

        //shade 3
        body_25: [-0.8, -0.08], //B
        body_26: [-0.79992, -0.07559], //F
        body_27: [-0.85052, -0.06878], //L

        body_28: [-0.8, -0.08], //B
        body_29: [-0.79992, -0.07559], //F
        body_30: [-0.73804, -0.07217], //K

        body_31: [-0.87768, -0.03295], //O
        body_32: [-0.79992, -0.07559], //F
        body_33: [-0.86908, -0.04778], //N

        body_34: [-0.86908, -0.04778], //N
        body_35: [-0.79992, -0.07559], //F
        body_36: [-0.86382, -0.05926], //M

        body_37: [-0.86382, -0.05926], //M
        body_38: [-0.79992, -0.07559], //F
        body_39: [-0.85052, -0.06878], //L

        body_40: [-0.7076, -0.04382], //T
        body_41: [-0.79992, -0.07559], //F
        body_42: [-0.71748, -0.05647], //U

        body_43: [-0.71748, -0.05647], //U
        body_44: [-0.79992, -0.07559], //F
        body_45: [-0.72815, -0.06437], //V

        body_46: [-0.72815, -0.06437], //V
        body_47: [-0.79992, -0.07559], //F
        body_48: [-0.73804, -0.07217], //K

        //shade 2 
        body_49: [-0.79992, -0.07559], //F
        body_50: [-0.87768, -0.03295], //O
        body_51: [-0.79967, -0.07058], //W

        body_52: [-0.79992, -0.07559], //F
        body_53: [-0.79967, -0.07058], //W
        body_54: [-0.7076, -0.04382], //T

        body_55: [-0.88821, -0.01765], //P
        body_56: [-0.79967, -0.07058], //W
        body_57: [-0.87768, -0.03295], //O

        body_tes4: [-0.79967, -0.06506], //Q
        body_tes5: [-0.88821, -0.01765], //Z
        body_tes6: [-0.79967, -0.07058], //R

        body_tes1: [-0.79967, -0.06506], //Z
        body_tes2: [-0.69534, -0.02208], //R
        body_tes3: [-0.79967, -0.07058], //W

        body_58: [-0.69534, -0.02208], //R
        body_59: [-0.79967, -0.07058], //W
        body_60: [-0.70088, -0.03236], //S

        body_61: [-0.70088, -0.03236], //S
        body_62: [-0.79967, -0.07058], //W
        body_63: [-0.7076, -0.04382], //T

        //shade 1
        body_64: [-0.79967, -0.06506], //Z
        body_65: [-0.69534, -0.02208], //R
        body_66: [-0.79967, -0.07058], //W

        body_67: [-0.79967, -0.06506], //Z
        body_68: [-0.88821, -0.01765], //P
        body_69: [-0.79967, -0.07058], //W

        body_70: [-0.88821, -0.01765], //P
        body_71: [-0.79967, -0.06506], //Z
        body_72: [-0.8935, 0], //Q

        body_73: [-0.8935, 0], //Q
        body_74: [-0.79967, -0.06506], //Z
        body_75: [-0.89347, 0.01822], //R

        body_76: [-0.89347, 0.01822], //R
        body_77: [-0.79967, -0.06506], //Z
        body_78: [-0.89012, 0.03735], //S

        body_79: [-0.89012, 0.03735], //S
        body_80: [-0.79967, -0.06506], //Z
        body_81: [-0.88518, 0.05397], //T

        body_82: [-0.88518, 0.05397], //T
        body_83: [-0.79967, -0.06506], //Z
        body_84: [-0.87083, 0.06685], //U

        body_85: [-0.87083, 0.06685], //U
        body_86: [-0.79967, -0.06506], //Z
        body_87: [-0.85423, 0.07317], //V

        body_88: [-0.85423, 0.07317], //V
        body_89: [-0.79967, -0.06506], //Z
        body_90: [-0.84474, 0.08542], //W

        body_91: [-0.84474, 0.08542], //W
        body_92: [-0.79967, -0.06506], //Z
        body_93: [-0.83978, 0.09454], //Z

        body_94: [-0.83978, 0.09454], //Z
        body_95: [-0.79967, -0.06506], //Z
        body_96: [-0.82261, 0.09689], //A

        body_97: [-0.82261, 0.09689], //A
        body_98: [-0.79967, -0.06506], //Z
        body_99: [-0.81273, 0.10281], //B

        body_100: [-0.81273, 0.10281], //B
        body_101: [-0.79967, -0.06506], //Z
        body_102: [-0.80403, 0.10439], //C

        body_103: [-0.80403, 0.10439], //C
        body_104: [-0.79967, -0.06506], //Z
        body_105: [-0.78862, 0.09847], //D

        body_106: [-0.78862, 0.09847], //D
        body_107: [-0.79967, -0.06506], //Z
        body_108: [-0.77281, 0.09412], //E

        body_109: [-0.77281, 0.09412], //E
        body_110: [-0.79967, -0.06506], //Z
        body_111: [-0.75423, 0.08898], //G

        body_112: [-0.75423, 0.08898], //G
        body_113: [-0.79967, -0.06506], //Z
        body_114: [-0.74356, 0.08463], //H

        body_115: [-0.74356, 0.08463], //H
        body_116: [-0.79967, -0.06506], //Z
        body_117: [-0.73052, 0.0787], //I

        body_118: [-0.73052, 0.0787], //I
        body_119: [-0.79967, -0.06506], //Z
        body_120: [-0.71906, 0.06961], //J

        body_121: [-0.71906, 0.06961], //J
        body_122: [-0.79967, -0.06506], //Z
        body_123: [-0.7072, 0.06448], //K

        body_124: [-0.7072, 0.06448], //K
        body_125: [-0.79967, -0.06506], //Z
        body_126: [-0.69772, 0.05539], //L

        body_127: [-0.69772, 0.05539], //L
        body_128: [-0.79967, -0.06506], //Z
        body_129: [-0.69258, 0.04392], //M

        body_130: [-0.69258, 0.04392], //M
        body_131: [-0.79967, -0.06506], //Z
        body_132: [-0.69021, 0.03009], //N

        body_133: [-0.69021, 0.03009], //N
        body_134: [-0.79967, -0.06506], //Z
        body_135: [-0.68862, 0.01586], //O

        body_136: [-0.68862, 0.01586], //O
        body_137: [-0.79967, -0.06506], //Z
        body_138: [-0.68823, 0.00401], //P

        body_136: [-0.68823, 0.00401], //P
        body_137: [-0.79967, -0.06506], //Z
        body_138: [-0.69218, -0.01062], //Q

        body_136: [-0.69218, -0.01062], //Q
        body_137: [-0.79967, -0.06506], //Z
        body_138: [-0.69534, -0.02208] //R
    };

    const object_nasi_kanan = {
        object_color1: [0.920, 0.920, 0.920], //shade 1
        object_color2: [0.880, 0.880, 0.880], //shade 2
        object_color3: [0.850, 0.850, 0.850], //shade 3
        object_color4: [0.820, 0.820, 0.820], //shade 4

        //shade 4
        body_1_a: [0.33289, -0.05607], //P2
        body_2_a: [0.34997, -0.04782], //F4
        body_3_a: [0.3556, -0.05834], //Q2

        body_4_a: [0.33289, -0.05607], //P2
        body_5_a: [0.34997, -0.04782], //F4
        body_6_a: [0.37225, -0.06137], //R2

        body_7_a: [0.35015, -0.04457], //E4
        body_8_a: [0.33289, -0.05607], //P2
        body_9_a: [0.34997, -0.04782], //F4

        body_10_a: [0.35015, -0.04457], //E4
        body_11_a: [0.37225, -0.06137], //R2
        body_12_a: [0.34997, -0.04782], //F4

        //shade 3
        body_13_a: [0.35, -0.04], //A4
        body_14_a: [0.48218, -0.06212], //N2
        body_15_a: [0.35015, -0.04457], //E4

        body_16_a: [0.30716, -0.05607], //O2
        body_17_a: [0.35015, -0.04457], //E4
        body_18_a: [0.33289, -0.05607], //P2

        body_19_a: [0.35, -0.04], //A4
        body_20_a: [0.39344, -0.0538], //S2
        body_21_a: [0.35015, -0.04457], //E4

        body_22_a: [0.39344, -0.0538], //S2
        body_23_a: [0.35015, -0.04457], //E4
        body_24_a: [0.37225, -0.06137], //R2

        //shade 2
        body_25_a: [0.35022, -0.03432], //D4
        body_26_a: [0.42769, -0.06137], //L2
        body_27_a: [0.35, -0.04], //A4

        body_28_a: [0.35022, -0.03432], //D4
        body_29_a: [0.23279, -0.05607], //U2
        body_30_a: [0.35, -0.04], //A4

        body_31_a: [0.42769, -0.06137], //L2
        body_32_a: [0.35, -0.04], //A4
        body_33_a: [0.45342, -0.06212], //M2

        body_34_a: [0.45342, -0.06212], //M2
        body_35_a: [0.35, -0.04], //A4
        body_36_a: [0.48218, -0.06212], //N2

        body_37_a: [0.2279, -0.05607], //U2
        body_38_a: [0.35, -0.04], //A4
        body_39_a: [0.21312, -0.05304], //T2

        body_40_a: [0.21312, -0.05304], //T2
        body_41_a: [0.35, -0.04], //A4
        body_42_a: [0.39344, -0.0538], //S2

        //shade 1
        body_43_a: [0.42769, -0.06137], //L2
        body_44_a: [0.35022, -0.03432], //D4
        body_45_a: [0.59893, -0.05758], //K2

        body_46_a: [0.59893, -0.05758], //K2
        body_47_a: [0.35022, -0.03432], //D4
        body_48_a: [0.57093, -0.05304], //J2

        body_49_a: [0.57093, -0.05304], //J2
        body_50_a: [0.35022, -0.03432], //D4
        body_51_a: [0.55, -0.05], //I2

        body_52_a: [0.55, -0.05], //I2
        body_53_a: [0.35022, -0.03432], //D4
        body_54_a: [0.52552, -0.04245], //H2

        body_55_a: [0.52552, -0.04245], //H2
        body_56_a: [0.35022, -0.03432], //D4
        body_57_a: [0.52097, -0.02655], //G2

        body_58_a: [0.52097, -0.02655], //G2
        body_59_a: [0.35022, -0.03432], //D4
        body_60_a: [0.51038, -0.01444], //F2

        body_61_a: [0.51038, -0.01444], //F2
        body_62_a: [0.35022, -0.03432], //D4
        body_63_a: [0.5104, 0], //E2

        body_64_a: [0.5104, 0], //E2
        body_65_a: [0.35022, -0.03432], //D4
        body_66_a: [0.51511, 0.01368], //D2

        body_67_a: [0.51511, 0.01368], //D2
        body_68_a: [0.35022, -0.03432], //D4
        body_69_a: [0.53308, 0.02945], //G3

        body_70_a: [0.53308, 0.02945], //G3
        body_71_a: [0.35022, -0.03432], //D4
        body_72_a: [0.55503, 0.04232], //H3

        body_73_a: [0.55503, 0.04232], //H3
        body_74_a: [0.35022, -0.03432], //D4
        body_75_a: [0.57774, 0.05443], //I3

        body_76_a: [0.57774, 0.05443], //I3
        body_77_a: [0.35022, -0.03432], //D4
        body_78_a: [0.4012, 0.06351], //J3

        body_79_a: [0.4012, 0.06351], //J3
        body_80_a: [0.35022, -0.03432], //D4
        body_81_a: [0.42542, 0.06881], //K3

        body_82_a: [0.42542, 0.06881], //K3
        body_83_a: [0.35022, -0.03432], //D4
        body_84_a: [0.44964, 0.07032], //L3

        body_85_a: [0.44964, 0.07032], //L3
        body_86_a: [0.35022, -0.03432], //D4
        body_87_a: [0.4678, 0.07259], //M3

        body_88_a: [0.4678, 0.07259], //M3
        body_89_a: [0.35022, -0.03432], //D4
        body_90_a: [0.48597, 0.07335], //N3

        body_91_a: [0.48597, 0.07335], //N3
        body_92_a: [0.35022, -0.03432], //D4
        body_93_a: [0.30716, 0.07411], //O3

        body_94_a: [0.30716, 0.07411], //O3
        body_95_a: [0.35022, -0.03432], //D4
        body_96_a: [0.32684, 0.07335], //P3

        body_97_a: [0.32684, 0.07335], //P3
        body_98_a: [0.35022, -0.03432], //D4
        body_99_a: [0.35106, 0.07486], //Q3

        body_100_a: [0.35106, 0.07486], //Q3
        body_101_a: [0.35022, -0.03432], //D4
        body_102_a: [0.37149, 0.07411], //R3

        body_103_a: [0.37149, 0.07411], //R3
        body_104_a: [0.35022, -0.03432], //D4
        body_105_a: [0.39647, 0.07789], //S3

        body_106_a: [0.39647, 0.07789], //S3
        body_107_a: [0.35022, -0.03432], //D4
        body_108_a: [0.2169, 0.07941], //T3

        body_109_a: [0.2169, 0.07941], //T3
        body_110_a: [0.35022, -0.03432], //D4
        body_111_a: [0.23961, 0.07638], //U3

        body_112_a: [0.23961, 0.07638], //U3
        body_113_a: [0.35022, -0.03432], //D4
        body_114_a: [0.25853, 0.07184], //V3

        body_115_a: [0.25853, 0.07184], //V3
        body_116_a: [0.35022, -0.03432], //D4
        body_117_a: [0.27896, 0.06654], //W3

        body_118_a: [0.27896, 0.06654], //W3
        body_119_a: [0.35022, -0.03432], //D4
        body_120_a: [0.29713, 0.05746], //Z3

        body_121_a: [0.29713, 0.05746], //Z3
        body_122_a: [0.35022, -0.03432], //D4
        body_123_a: [0.1221, 0.04686], //B4

        body_124_a: [0.1221, 0.04686], //B4
        body_125_a: [0.35022, -0.03432], //D4
        body_126_a: [0.14481, 0.04005], //C4

        body_127_a: [0.14481, 0.04005], //C4
        body_128_a: [0.35022, -0.03432], //D4
        body_129_a: [0.16373, 0.02718], //F3

        body_130_a: [0.16373, 0.02718], //F3
        body_131_a: [0.35022, -0.03432], //D4
        body_132_a: [0.18795, 0.01205], //E3

        body_133_a: [0.18795, 0.01205], //E3
        body_134_a: [0.35022, -0.03432], //D4
        body_135_a: [0.17962, -0.01217], //D3

        body_136_a: [0.17962, -0.01217], //D3
        body_137_a: [0.35022, -0.03432], //D4
        body_138_a: [0.16146, -0.03185], //C3

        body_139_a: [0.16146, -0.03185], //C3
        body_140_a: [0.35022, -0.03432], //D4
        body_141_a: [0.14254, -0.04169], //B3

        body_142_a: [0.14254, -0.04169], //B3
        body_143_a: [0.35022, -0.03432], //D4
        body_144_a: [0.11605, -0.04547], //A3

        body_145_a: [0.11605, -0.04547], //A3
        body_146_a: [0.35022, -0.03432], //D4
        body_147_a: [0.29107, -0.04547], //Z2

        body_148_a: [0.29107, -0.04547], //Z2
        body_149_a: [0.35022, -0.03432], //D4
        body_150_a: [0.27215, -0.04926], //W2

        body_151_a: [0.27215, -0.04926], //W2
        body_152_a: [0.35022, -0.03432], //D4
        body_153_a: [0.25, -0.05], //V2

        body_154_a: [0.25, -0.05], //V2
        body_155_a: [0.35022, -0.03432], //D4
        body_156_a: [0.23279, -0.05607] //U2

    };

    const vertices = [

        //shade 4
        ...object_nasi_kiri.body_1, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_2, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_3, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_4, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_5, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_6, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_7, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_8, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_9, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_10, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_11, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_12, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_13, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_14, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_15, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_16, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_17, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_18, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_19, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_20, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_21, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_22, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_23, ...object_nasi_kiri.object_color4,
        ...object_nasi_kiri.body_24, ...object_nasi_kiri.object_color4, // 120

        //shade 3
        ...object_nasi_kiri.body_25, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_26, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_27, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_28, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_29, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_30, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_31, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_32, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_33, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_34, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_35, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_36, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_37, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_38, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_39, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_40, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_41, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_42, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_43, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_44, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_45, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_46, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_47, ...object_nasi_kiri.object_color3,
        ...object_nasi_kiri.body_48, ...object_nasi_kiri.object_color3, // 240

        //shade 2
        ...object_nasi_kiri.body_49, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_50, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_51, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_52, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_53, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_54, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_55, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_56, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes4, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes5, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes6, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_57, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes1, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes2, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_tes3, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_58, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_59, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_60, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_61, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_62, ...object_nasi_kiri.object_color2,
        ...object_nasi_kiri.body_63, ...object_nasi_kiri.object_color2, //345

        //shade 1
        ...object_nasi_kiri.body_64, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_65, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_66, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_67, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_68, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_69, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_70, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_71, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_72, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_73, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_74, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_75, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_76, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_77, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_78, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_79, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_80, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_81, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_82, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_83, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_84, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_85, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_86, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_87, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_88, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_89, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_90, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_91, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_92, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_93, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_94, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_95, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_96, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_97, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_98, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_99, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_100, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_101, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_102, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_103, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_104, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_105, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_106, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_107, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_108, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_109, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_110, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_111, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_112, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_113, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_114, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_115, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_116, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_117, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_118, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_119, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_120, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_121, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_122, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_123, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_124, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_125, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_126, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_127, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_128, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_129, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_130, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_131, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_132, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_133, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_134, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_135, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_136, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_137, ...object_nasi_kiri.object_color1,
        ...object_nasi_kiri.body_138, ...object_nasi_kiri.object_color1, // 715


        //shade 4
        ...object_nasi_kanan.body_1_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_2_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_3_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_4_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_5_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_6_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_7_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_8_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_9_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_10_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_11_a, ...object_nasi_kanan.object_color4,
        ...object_nasi_kanan.body_12_a, ...object_nasi_kanan.object_color4, // 775

        //shade 3
        ...object_nasi_kanan.body_13_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_14_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_15_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_16_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_17_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_18_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_19_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_20_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_21_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_22_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_23_a, ...object_nasi_kanan.object_color3,
        ...object_nasi_kanan.body_24_a, ...object_nasi_kanan.object_color3, // 835

        //shade 2
        ...object_nasi_kanan.body_25_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_26_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_27_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_28_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_29_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_30_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_31_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_32_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_33_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_34_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_35_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_36_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_37_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_38_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_39_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_40_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_41_a, ...object_nasi_kanan.object_color2,
        ...object_nasi_kanan.body_42_a, ...object_nasi_kanan.object_color2, // 925

        //shade 1
        ...object_nasi_kanan.body_43_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_44_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_45_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_46_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_47_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_48_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_49_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_50_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_51_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_52_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_53_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_54_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_55_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_56_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_57_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_58_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_59_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_60_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_61_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_62_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_63_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_64_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_65_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_66_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_67_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_68_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_69_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_70_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_71_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_72_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_73_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_74_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_75_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_76_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_77_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_78_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_79_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_80_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_81_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_82_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_83_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_84_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_85_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_86_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_87_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_88_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_89_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_90_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_91_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_92_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_93_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_94_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_95_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_96_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_97_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_98_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_99_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_100_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_101_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_102_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_103_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_104_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_105_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_106_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_107_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_108_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_109_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_110_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_111_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_112_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_113_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_114_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_115_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_116_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_117_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_118_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_119_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_120_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_121_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_122_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_123_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_124_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_125_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_126_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_127_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_128_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_129_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_130_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_131_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_132_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_133_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_134_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_135_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_136_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_137_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_138_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_139_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_140_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_141_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_142_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_143_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_144_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_145_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_146_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_147_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_148_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_149_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_150_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_151_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_152_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_153_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_154_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_155_a, ...object_nasi_kanan.object_color1,
        ...object_nasi_kanan.body_156_a, ...object_nasi_kanan.object_color1 // 1490

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0133;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (change < -0.7 || change > 0.7) {
            speed = speed * -1;
        }

        for (let i = 1; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 300;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}