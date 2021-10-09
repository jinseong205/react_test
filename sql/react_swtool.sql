CREATE TABLE react_swtool (
  swt_code varchar(100) NOT NULL ,
  swt_toolname varchar(100) DEFAULT NULL ,
  swt_function varchar(300) ,
  swt_imagepath varchar(100) DEFAULT NULL  ,
  swt_big_imgpath varchar(100) DEFAULT NULL  ,
  swt_comments varchar(300)  ,
  swt_demo_site varchar(100) DEFAULT NULL  ,
  swt_manual_path varchar(100) DEFAULT NULL  ,
  swt_github_url varchar(100) DEFAULT NULL ,
  reg_date varchar(100) DEFAULT NULL  ,
  reg_user varchar(100) DEFAULT NULL  ,
  update_date varchar(100) DEFAULT NULL ,
  update_user varchar(100) DEFAULT NULL ,
  PRIMARY KEY (swt_code)
);

DESC react_swtool

insert into react_swtool (swt_code) values ('1');

INSERT INTO react_swtool VALUES ('USW20200101000000', '툴 이름1', '상세 기능1', '20200101000000_라벨 이미지.png'
, '20200101000000_메인 이미지.png', '설명1', '데모 URL1', '20200101000000_메뉴얼 파일.docx', 'Github URL1'
, '20200101000000', 'userA1', '20200102000000', 'userB1');
INSERT INTO react_swtool VALUES ('USW20200102000000', '툴 이름2', '상세 기능2', '20200102000000_라벨 이미지.png'
, '20200102000000_메인 이미지.png', '설명2', '데모 URL2', '20200102000000_메뉴얼 파일.docx', 'Github URL2'
, '20200102000000', 'userA2', '20200103000000', 'userB2');
commit;


select * from react_swtool