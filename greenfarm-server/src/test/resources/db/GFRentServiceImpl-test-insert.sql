INSERT INTO gf_rent (land_id,farm_id,seed_id,username,rent_price,area,rent_start_time,rent_end_time,confirm_crops,create_time,modify_time,remark) VALUES (555,666,1,'jack',0.0000,100,'2021-07-01','2020-07-01','cron tomato','2021-07-01 15:09:37','2021-07-01 14:32:46','string');
INSERT INTO gf_user (username, rolename, fullname,location, password,   phone, email, sex,  icon_url, description, carbon_credit,
                     carbon_medals, create_time, modify_time,  remark)
VALUES ('test', 'c','tset','test', '123456',  '18703694903', '18703694903@163.com', 'man',
        'a.png', 'goodtest', 50, 'test', now(), now(), 'test');
INSERT INTO gf_user (username, rolename, fullname,location, password,   phone, email, sex,  icon_url, description, carbon_credit,
                     carbon_medals, create_time, modify_time,  remark)
VALUES ('jack', 'c','jack','test', '3342423',  '234324341', '18703694903@163.com', 'man',
        'vvv.png', 'goodtest', 50, 'test', now(), now(), 'test');
INSERT INTO gf_plant_task (task_id,username, land_id, seed_id, status, create_time, modify_time, remark, product_id) VALUES (888,'jack', 555, 1, '1', now(), now(), 'test', 6);
INSERT INTO gf_task_step (step_id, task_id, carbon_credit, plant_no, plant_step, status, begin_time, end_time, remark) VALUES (777, 888, 545, 3245, '23', '2', '2021-06-24', '2021-06-26', '2212dfd');
INSERT INTO gf_task_detail (step_id, username, oper_record, location, status, create_time, modify_time, remark) VALUES (777, 'jack', '[{"type":"image","url":"/home/wasuser/huangzhiming/files/f2632dc0ee1746b2a29411ac5dd29cf4-irrigation-1.png"},{"type":"video","url":"/home/wasuser/huangzhiming/files/f2632dc0ee1746b2a29411ac5dd29cf4-irrigation-1.mp4"},{"type":"video","url":"/home/ec2-user/live_jhj/record/mp4/1.mp4"},{"type":"video","url":"/home/ec2-user/live_jhj/record/mp4/6.mp4"}]', 'test_location', '1', '2021-06-29 15:43:27', '2021-07-09 00:23:14', 'test-remark');
INSERT INTO gf_step_template (seed_id, carbon_credit, plant_no, plant_step, begin_time, end_time, remark, vedio_url) VALUES (1, 444, 3245, 'df', null, null, null, '12,23213,1232,dsfds');
INSERT INTO gf_land (land_id,farm_id, is_rent, suited_crops, area, create_time, modify_time, remark, price) VALUES (555,666, 0, 'ttt', null, null, null, null, null);
INSERT INTO gf_farm (farm_id,farm_name, introduction, username, total_area, idle_area, location, icon_url, rent_period, create_time, modify_time, remark, suited_crops, latitude_longitude, image_url, vr_url) values (666,'test','test','test',12,12,'test','test','test',now(),now(),'test','test','test','test','test');
INSERT INTO gf_seed (seed_id,product_id, seed_name, seed_introduction, production, seed_price, fertilizer_name, fertilizer_price, fertilizer_amount, watering_quantity, mature_period, create_time, modify_time, remark, lowest_planting) VALUES (1,3, 'dddd', 'information', 'ss', 23, 'ddd', 23, '3', '32', 3, '2021-06-22 03:14:11', null, 'ddddtest', null);
INSERT INTO gf_carbon_credit_daily (credit_daily_id, username, carbon_credit, carbon_date, type) VALUES (2, 'jack', 328919, '2021-07-02', '1');
INSERT INTO gf_community (community_id, farm_id, community_name, introduction, community_image_url, create_time, modify_time, remark) VALUES (999, 666, 'trst', 'this is a new farm for goood seed to plant hahahah', 'img/1.jpg', '2021-07-26 00:53:15', '2021-07-26 00:53:15', null)