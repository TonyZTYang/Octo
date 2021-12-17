create table comtype_info
(
	Id int auto_increment comment '组件类型'
		primary key,
	Name varchar(255) not null comment '名称',
	PName varchar(255) null comment '父名称',
	Level int(2) not null comment '层级关系',
	TestRate varchar(255) null comment '检测频率'
)
charset=utf8;

create table data_record
(
	Id int auto_increment comment 'ID'
		primary key,
	FactoryName varchar(255) not null comment '作业部/厂',
	DeviceID varchar(255) not null comment '装置',
	PIDTuHao varchar(255) null comment 'PID图号',
	PictureID varchar(255) not null comment '组件标签号',
	PointID varchar(255) not null comment '密封点扩展号',
	AreaID varchar(255) not null comment '区域',
	ChildAreaID varchar(255) null comment '子区域',
	Floor int null comment '楼层',
	ComPosition varchar(255) not null comment '组件位置/工艺描述',
	PipeLine varchar(255) not null comment '设备/管线描述',
	PipeLineCode varchar(255) not null comment '设备位号/管线号',
	PipeSize int not null comment '尺寸',
	Medium varchar(255) not null comment '介质',
	MediumStateID varchar(255) not null comment '介质状态',
	IsDifficultCheck varchar(255) not null comment '难/险于检测',
	IsKeepWarm varchar(255) not null comment '是否保温',
	PointDescription varchar(255) null comment '密封点描述',
	PointType varchar(255) not null comment '组件类型',
	LeakageValue int null comment '泄漏值',
	DischargeSpeed double null comment '排放速率kg/h',
	DischargeWeight double null comment '排放量吨/年',
	TwoLeakageValue int null comment '二次泄漏值',
	TwoDischargeSpeed double null comment '二次排放速率kg/h',
	TwoDischargeWeight double null comment '二次排放量吨/年',
	ThreeLeakageValue int null comment '三次泄漏值',
	ThreeDischargeSpeed double null comment '三次排放速率kg/h',
	ThreeDischargeWeight double null comment '三次排放量吨/年',
	TestPerson varchar(255) null comment '检测人',
	TestTime date null comment '检测时间',
	TestInstrument varchar(255) null comment '检测仪器',
	Xzuobiao int null comment 'X坐标',
	Yzuobiao int null comment 'Y坐标',
	JianDangType varchar(255) null comment '建档模式',
	ShiYouType varchar(255) null comment '石油炼制/石油化工',
	IsWeiXiu varchar(255) null comment '维修点',
	IsHeGe varchar(255) null comment '是否合格',
	IsXieLou varchar(255) null comment '泄漏点'
)
charset=utf8;

create index index_pic_pot
	on data_record (PictureID, PointID);

create table device_info
(
	Id int auto_increment comment 'ID'
		primary key,
	PId int not null comment '父节点ID',
	ChineseName varchar(255) not null comment '名称',
	EnglishName varchar(255) null comment '英文名称',
	Level int(2) not null comment '层级关系',
	ShiYouType varchar(255) null comment '石油炼制/石油化工',
	QiTi int null comment '气体泄漏标准',
	QingYe int null comment '轻液泄漏标准',
	ZhongYe int null comment '重液泄漏标准',
	YanZhong int null comment '严重泄漏标准'
)
charset=utf8;

create table jiaozhun_record
(
	Id int auto_increment comment '校准记录ID'
		primary key,
	InstrumentNum varchar(255) default '' not null comment '仪器编号',
	StdGasNum varchar(255) default '' not null comment '标准气编号',
	NongDuZhi varchar(255) default '' not null comment '标准气浓度值',
	JiaoZhunZhi varchar(255) default '' not null comment '标准气校准值',
	CeShiZhi varchar(255) default '' not null comment '漂移测试值',
	IsSuccess varchar(255) default '' not null comment '成功或超限',
	WenDu varchar(255) default '' not null comment '环境温度',
	FengSu varchar(255) default '' not null comment '风速',
	JiaoZhunTime date default '0000-00-00' not null comment '校准时间',
	Person varchar(255) default '' not null comment '校准时间'
)
charset=utf8;

create table medium_state
(
	Id int auto_increment comment '介质状态ID'
		primary key,
	ChineseName varchar(255) not null comment '介质状态名称',
	EnglishName varchar(255) null comment '介质状态英文名'
)
charset=utf8;

create table picture_info
(
	Id varchar(255) not null comment '照片编号',
	FactoryID int null comment '作业部/厂',
	DeviceID int null comment '装置',
	AreaID int null comment '区域',
	ChildAreaID int null comment '子区域',
	Floor int null comment '楼层',
	ComPosition varchar(255) null comment '组件位置',
	PipeLine varchar(255) null comment '设备/管线名称',
	PipeLineCode varchar(255) null comment '设备位号/管线位号',
	Medium varchar(255) null comment '介质',
	MediumState varchar(255) null comment '介质状态',
	DTMorUTM varchar(255) null comment '难/险于检测',
	PictureContent mediumblob null comment '照片内容',
	PictureType varchar(255) null comment '照片格式',
	PIDTuHao varchar(255) null comment 'PID图号',
	JianDangType varchar(255) null comment '建档方式',
	PicWithPoint mediumblob null comment '带点照片',
	PicTypeWithPoint varchar(255) null comment '带点照片格式',
	constraint Id
		unique (Id)
)
charset=utf8;

alter table picture_info
	add primary key (Id);

create table productstream
(
	Id int auto_increment comment '介质ID'
		primary key,
	ChineseName varchar(255) not null comment '介质名称',
	MediumYinZi varchar(255) not null comment '介质因子'
)
charset=utf8;

create table std_gas
(
	Id int auto_increment comment '标准气ID'
		primary key,
	StdGasNum varchar(255) default '' not null comment '标准气编号',
	ActualDensity varchar(255) default '' not null comment '实际浓度',
	EffectiveTime date default '0000-00-00' not null comment '有效期',
	TheoryDensityID varchar(255) default '' not null comment '理论浓度'
)
charset=utf8;

create table test_instrument
(
	Id int auto_increment comment '检测仪器ID'
		primary key,
	Name varchar(255) default '' not null comment '仪器名称',
	Number varchar(255) default '' not null comment '仪器编号',
	LastTime date default '0000-00-00' not null comment '最后精密校准时间',
	InstrumentYinZi double null comment '响应因子'
)
charset=utf8;

create table test_rate
(
	Id int auto_increment comment '检测频率ID'
		primary key,
	ChineseName varchar(255) default '' not null comment '中文名',
	EnglishName varchar(255) default '' null comment '英文名'
)
charset=utf8;

create table theory_density
(
	Id int auto_increment comment '标准气理论浓度ID'
		primary key,
	TheoryDensity varchar(255) default '' not null comment '标准气理论浓度',
	IsDayCorrect char default '' not null comment '日常校准',
	IsDriftCorrect char default '' not null comment '漂移校准'
)
charset=utf8;

create table work_laws
(
	Id int auto_increment comment 'ID'
		primary key,
	LawId int default 0 not null comment '法规ID'
)
charset=utf8;


