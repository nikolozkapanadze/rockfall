ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32638").setExtent([358465.455143, 4683590.970881, 358946.092643, 4683923.477480]);
var wms_layers = [];

var lyr_Ph_90asc_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ph_90.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ph_90asc_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Ph_90_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ph_90",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ph_90_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_Ph_50asc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ph_50.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ph_50asc_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Ph_50_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ph_50",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ph_50_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_Nr_tree_impactsasc_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_tree_impacts.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_tree_impactsasc_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Nr_tree_impacts_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_tree_impacts",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_tree_impacts_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_Nr_sourcecellsasc_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_sourcecells.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_sourcecellsasc_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Nr_sourcecells_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_sourcecells",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_sourcecells_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_Nr_passagesasc_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_passages.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_passagesasc_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Nr_passages_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_passages",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_passages_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_Nr_depositedasc_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_deposited.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_depositedasc_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_Nr_deposited_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nr_deposited",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nr_deposited_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_EL_anglesasc_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "EL_angles.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EL_anglesasc_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_EL_angles_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "EL_angles",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EL_angles_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_meanasc_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_mean.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_meanasc_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_mean_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_mean",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_mean_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_99asc_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_99.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_99asc_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_99_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_99",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_99_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_98asc_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_98.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_98asc_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_98_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_98",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_98_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_95CIasc_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_95CI.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_95CIasc_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_95CI_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_95CI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_95CI_21.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_95asc_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_95.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_95asc_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_95_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_95",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_95_23.png",
    attributions: ' ',
                                projection: 'EPSG:32638',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_90asc_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_90.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_90asc_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_90_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_90",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_90_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });
var lyr_E_50asc_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_50.asc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_50asc_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -506.000000, 916.000000, 0.000000]
                            })
                        });
var lyr_E_50_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "E_50",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/E_50_27.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [357902.160000, 4683298.500000, 359733.160000, 4684310.500000]
                            })
                        });

lyr_Ph_90asc_0.setVisible(true);lyr_Ph_90_1.setVisible(true);lyr_Ph_50asc_2.setVisible(true);lyr_Ph_50_3.setVisible(true);lyr_Nr_tree_impactsasc_4.setVisible(true);lyr_Nr_tree_impacts_5.setVisible(true);lyr_Nr_sourcecellsasc_6.setVisible(true);lyr_Nr_sourcecells_7.setVisible(true);lyr_Nr_passagesasc_8.setVisible(true);lyr_Nr_passages_9.setVisible(true);lyr_Nr_depositedasc_10.setVisible(true);lyr_Nr_deposited_11.setVisible(true);lyr_EL_anglesasc_12.setVisible(true);lyr_EL_angles_13.setVisible(true);lyr_E_meanasc_14.setVisible(true);lyr_E_mean_15.setVisible(true);lyr_E_99asc_16.setVisible(true);lyr_E_99_17.setVisible(true);lyr_E_98asc_18.setVisible(true);lyr_E_98_19.setVisible(true);lyr_E_95CIasc_20.setVisible(true);lyr_E_95CI_21.setVisible(true);lyr_E_95asc_22.setVisible(true);lyr_E_95_23.setVisible(true);lyr_E_90asc_24.setVisible(true);lyr_E_90_25.setVisible(true);lyr_E_50asc_26.setVisible(true);lyr_E_50_27.setVisible(true);
var layersList = [lyr_Ph_90asc_0,lyr_Ph_90_1,lyr_Ph_50asc_2,lyr_Ph_50_3,lyr_Nr_tree_impactsasc_4,lyr_Nr_tree_impacts_5,lyr_Nr_sourcecellsasc_6,lyr_Nr_sourcecells_7,lyr_Nr_passagesasc_8,lyr_Nr_passages_9,lyr_Nr_depositedasc_10,lyr_Nr_deposited_11,lyr_EL_anglesasc_12,lyr_EL_angles_13,lyr_E_meanasc_14,lyr_E_mean_15,lyr_E_99asc_16,lyr_E_99_17,lyr_E_98asc_18,lyr_E_98_19,lyr_E_95CIasc_20,lyr_E_95CI_21,lyr_E_95asc_22,lyr_E_95_23,lyr_E_90asc_24,lyr_E_90_25,lyr_E_50asc_26,lyr_E_50_27];
